const Footer = () => {
  return (
    <footer
      style={{ paddingBottom: 20, paddingTop: 50, textAlign: "center" }}
      className="text-normal"
    >
      <div>
        {" "}
        <h4 className=" text-gray-800 font-semibold">
          © 2023-2024 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            CS23A14{" "}
          </span>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;