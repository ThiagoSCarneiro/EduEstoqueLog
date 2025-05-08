// Parte dos componentes do app do programa integrador RafaDev
import React from 'react';
import './ProductInfoCard.css';

const ProductInfoCard = () => {
  return (
    <div className="product-info-container">
      <div className="info-box">
        <p><strong>Produto:</strong> xxx-xxx</p>
        <p><strong>Tipo Produto:</strong></p>
        <p><strong>Código do Produto:</strong></p>
      </div>

      <label className="description-label" htmlFor="descricao">
        Descrição do produto:
      </label>
      <textarea
        id="descricao"
        className="description-box"
        rows="5"
        placeholder="Digite a descrição aqui..."
      ></textarea>
    </div>
  );
};

export default ProductInfoCard;
