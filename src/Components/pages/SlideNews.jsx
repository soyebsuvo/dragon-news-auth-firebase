import Marquee from "react-fast-marquee";

export default function SlideNews() {
    return (
        <div className="flex gap-4 max-w-5xl mx-auto">
            <button className="btn btn-sm btn-secondary">News Here</button>
            <Marquee speed={50}>
                I can be a React component, multiple React components, or just some text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto ut maiores non, vel saepe minus incidunt dicta cupiditate perspiciatis animi qui, porro quam. Distinctio voluptas quibusdam animi doloremque aperiam!
            </Marquee>
        </div>
    )
}
