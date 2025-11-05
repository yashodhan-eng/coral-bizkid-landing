import coralLogo from "@/assets/coral-logo.svg";

const Header = () => {
  return (
    <header className="w-full py-4 sm:py-5 px-4 sm:px-6 pb-0">
      <div className="container max-w-6xl mx-auto">
        <div className="flex justify-center md:justify-start">
          <img 
            src={coralLogo} 
            alt="Coral Academy" 
            className="h-7 sm:h-8 md:h-10 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
