import { Link } from "react-router-dom";

const BannerContent = ({ style }) => {
    return (
        <div style={style} className="text-center">
            <h4
                data-aos="fade-left"
                data-aos-duration="1900"
                className="mb-2 md:mb-6 text-lg md:text-3xl text-center"
            >
                Welcome to
            </h4>
            <h1
                data-aos="fade-right"
                data-aos-duration="2500"
                className="md:mb-7 font-semibold  text-2xl  md:text-7xl"
            >

            </h1>
            <p className=" text-md mx-5 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In voluptas necessitatibus a. Ad suscipit corporis libero necessitatibus nam, debitis neque! Beatae porro delectus odio! Voluptatem, nisi debitis. Animi, nostrum in?
            </p>

            <Link
                to="/allSubjects"
                className="mt-4 btn-sm md:btn-md md:mt-6 md:text-lg btn-primary btn rounded-full text-md  border-none px-8"
            >
                Lorem, ipsum dolor.
            </Link>
        </div>
    );
};

export default BannerContent;
