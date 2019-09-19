import React from 'react';
import { tsPropertySignature, isTemplateElement } from '@babel/types';

const List = ( name, items ) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( item =>) <li key={item.id}> {ite.name} </li> }
    </ul>
  </div>
)

export default List;