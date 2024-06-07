import './App.css'

function Cuadro()
{
    return (
        <div className='principal'>
        <div className='texto'>
            <h1 className="abc">Tania Pinto del paralelo A</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore assumenda possimus illum ab dolor earum consectetur necessitatibus. Nihil eum enim ipsa quam eveniet similique cum error, nostrum iste possimus ipsum?</p>
        </div>
        <div className='container'>
            <div className='imagen'>
                <img src={`./Octocat.png`} alt="Descripción de la imagen" className="image" />
            </div>
        </div>
    </div>
    );
}
export default Cuadro;