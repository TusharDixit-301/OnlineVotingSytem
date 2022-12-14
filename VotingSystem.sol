// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract VotingSystem {

    struct Voter {
        uint weight; 
        bool voted;  
        //address delegate; 
        string candidate_name;   
    }

    struct Proposal {
        string name;  
        uint voteCount; 
    }

    address public chairperson;
    mapping(address => Voter) internal voters;
    Proposal[] internal proposals;
    mapping(string => uint) internal candidate_index;

    constructor(string[] memory proposalNames) {
        chairperson = msg.sender;
        voters[chairperson].weight = 1;

        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
            candidate_index[proposalNames[i]] = i;
        }
    }

    function giveRightToVote(address voter) public {
        require(voter != chairperson, "Chairperson cannot give right to himself");
        require(
            msg.sender == chairperson,
            "Only chairperson can give right to vote."
        );
        require(
            !voters[voter].voted,
            "The voter already voted."
        );
        require(voters[voter].weight == 0);
        voters[voter].weight = 1;
    }

    function vote(string memory proposal_name) public {
        require(msg.sender != chairperson,"Owner cannot vote");
        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "Has no right to vote");
        require(!sender.voted, "Already voted.");
        sender.voted = true;
        sender.candidate_name = proposal_name;
        proposals[candidate_index[proposal_name]].voteCount += sender.weight;
    }

    function winningProposal() internal view
            returns (uint winningProposal_)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    function winnerName() public view
            returns (string memory winnerName_)
    {   int winner = -1;
        uint k = proposals[0].voteCount;
        for (uint p = 1; p < proposals.length; p++) {
            if(k!=  proposals[p].voteCount){
                winner = int(winningProposal());
                break;
            }
        }
        require(winner != -1,"voting not started yet");
        winnerName_ =  proposals[uint(winner)].name;
        return winnerName_;
    }
}
