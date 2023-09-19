import React from 'react';
import EmptyDataComponentStyle from '../Styles/EmptyDataComponent.css';

function EmptyDataComponent(props) {
  const { handleAñadirButton } = props;
  return (
    <div className='empty-data-main-container'>
        <div className='empty-data-title-container'>
            <p>Todo anda muy vacío por aquí...</p>
        </div>
        <div className='empty-data-description-container'>
            <p>¡Descubre cómo el control financiero puede impulsar tu negocio hacia el éxito!</p>
        </div>
        <div className='empty-data-cta' onClick={handleAñadirButton}>
            Añadir {props.cta_text}
        </div>
    </div>
  )
}

export default EmptyDataComponent