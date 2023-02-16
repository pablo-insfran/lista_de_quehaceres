import React from 'react'
import { useState } from 'react'

const Forms = ({ tarea, setTarea }) => {

    const [nombre, setNombre] = useState("");

    const adminForms = (evento) => {
        evento.preventDefault();
        setTarea ([...tarea, {nombre, completado: false}])
    }

    return (
        <div>
            <form onSubmit={adminForms}>
                <div className="mb-3" >
                    <input
                        type="text"
                        className="form-control"
                        onChange={(evento) => setNombre(evento.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}

export default Forms