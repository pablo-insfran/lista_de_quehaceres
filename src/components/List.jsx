import React from 'react'

const List = ({ tarea, setTarea }) => {

    // const [completado, setCompletado] = useState(false)

    const eliminarTarea = (id) => {
        console.log("Eliminar: ", id);
        const tareaeliminado = tarea.filter(
            (quehacer, idx) => idx !== id)
        setTarea(tareaeliminado)
        console.log("Tarea Eliminada", tareaeliminado)
    }

    const updateTarea = (id) => {
        const tareaupdate = tarea.filter((quehacer, idx) => {
            if (idx === id) {
                quehacer.completado = !quehacer.completado;
            }
            return quehacer;
        })
        setTarea(tareaupdate)
        console.log("Tarea Update", tareaupdate)
    }

    return (
        <div>
            {tarea.map((quehacer, idx) =>
                <div className="form-check" key={idx}>
                    <input className="form-check-input"            
                        type="checkbox" 
                        onClick={() => updateTarea(idx)} 
                        defaultChecked={quehacer.completado === true}/>

                    <label className="form-check-label"
                        htmlFor="flexCheckIndeterminate"
                        style={
                            quehacer.completado === true
                                ? { textDecoration: 'line-through' }
                                : { textDecoration: 'none' }
                        }>{quehacer.nombre}</label>
                    <button type="button" className="btn btn-dark" onClick={() => eliminarTarea(idx)}>Delete</button>
                </div>
            )}
        </div>
    )

}

export default List