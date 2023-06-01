import image from "../elements/inicioimagen.webp";

const Inicio  = () => {
    return(
        <div className="mt-5" style={{ backgroundImage: `url(${image})`,
        backgroundSize: "cover", height: "100vh"}}>
        </div>
    )
}
export default Inicio;