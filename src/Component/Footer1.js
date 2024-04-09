import Logo from "./Logo";

export default function Footer1() {
  const src = "./images/Logo.png";
  const alt = "dribble";

  return (
    <footer className="mt-20 mb-12 mx-5">
      <div className="grid grid-cols-6 gap-1">
        <div className="flex flex-col">
          <Logo src={src} alt={alt} />
          <div className="ml-2 ">
            Dribble is the worlds leading <br></br>community for creatives to
            share, grow <br></br>and get hired
          </div>
          <div className="flex flex-row mt-2">
            <div className="w-5 ml-3">
              <a href="#">
                <img src="./images/twitter.svg" alt="twitter" />
              </a>
            </div>
            <div className="w-5 ml-3">
              <a href="#">
                <img src="./images/facebook.svg" alt="facebook" />
              </a>
            </div>
            <div className="w-5 ml-3">
              <a href="#">
                <img src="./images/instagram.svg" alt="instagram"></img>
              </a>
            </div>
            <div className="w-5 ml-3">
              <a href="#">
                <img src="./images/pinterest.svg" alt="pinterest"></img>
              </a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold">For designers</h1>
          <div>
            <a href="#">Go Pro</a>
          </div>
          <div>
            <a href="#">Explore design work</a>
          </div>
          <div>
            <a href="#">Design blog</a>
          </div>
          <div>
            <a href="#">Overtime podcast</a>
          </div>
          <div>
            <a href="#">Playoffs</a>
          </div>
          <div>
            <a href="#">Weekly Warm-Up</a>
          </div>
          <div>
            <a href="#">Refer a Friend</a>
          </div>
          <div>
            <a href="#">Code of conduct</a>
          </div>
        </div>
        <div>
          <h1 className="font-bold">Hire designers</h1>
          <div>
            <a href="#">Post a job opening </a>
          </div>
          <div>
            <a href="#">Post a freelance project</a>
          </div>
          <div>
            <a href="#">Search for designers</a>
          </div>
          <div className="font-bold">
            <a href="#">Brands</a>
          </div>
          <div>
            <a href="#">Advertise with us</a>
          </div>
        </div>
        <div>
          <h1 className="font-bold">Company</h1>
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a href="#">Careers</a>
          </div>
          <div>
            <a href="#">Support</a>
          </div>
          <div>
            <a href="#">Media Kit</a>
          </div>
          <div>
            <a href="#">Testimonials</a>
          </div>
          <div>
            <a href="#">API</a>
          </div>
          <div>
            <a href="#">Terms of service</a>
          </div>
          <div>
            <a href="#">Privacy of policy </a>
          </div>
          <div>
            <a href="#">Cookie policy</a>
          </div>
        </div>
        <div>
          <h1 className="font-bold">Directories</h1>
          <div>
            <a href="#">Design jobs</a>
          </div>
          <div>
            <a href="#">Design for hire</a>
          </div>
          <div>
            <a href="#">Freelance designers for hire</a>
          </div>
          <div>
            <a href="#">Tags</a>
          </div>
          <div>
            <a href="#">Places</a>
          </div>
          <div className="font-bold">
            <a href="#">Design assets</a>
          </div>
          <div>
            <a href="#">Dribble Marketplace</a>
          </div>
          <div>
            <a href="#">Creative Market</a>
          </div>
          <div>
            <a href="#">Fontspring</a>
          </div>
          <div>
            <a href="#">Font Squirrel</a>
          </div>
        </div>
        <div>
          <h1 className="font-bold">Design Resources</h1>
          <div>
            <a href="#">Freelancing</a>
          </div>
          <div>
            <a href="#">Design Hiring</a>
          </div>
          <div>
            <a href="#">Design Portfolio</a>
          </div>
          <div>
            <a href="#">Design Education</a>
          </div>
          <div>
            <a href="#">Creative Process</a>
          </div>
          <div>
            <a href="#">Design Industry Trends</a>
          </div>
        </div>
      </div>
      <hr className="mt-2"></hr>
      <div className="flex  justify-between mt-2 mb-4 ml-2">
        <div>@2023 Dribble,All right reserved</div>
        <div className="flex flex-row">
          <div>
            <span className="font-bold">20,501,853 </span>
          </div>
          shots dribbled
          <div className="ml-2">
            <img
              src="./images/dribbble.svg"
              alt="dribbble"
              className="w-7"
            ></img>
          </div>
        </div>
      </div>
    </footer>
  );
}
