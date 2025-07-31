import React from 'react';
import '../scss/components/_collection.scss';
import { collectionContent } from '../assets';

function Collection() {
  return (
    <section id="collection" className="collection">
        <div className="container">
             <span>Our collection</span>
            <div className="row">
                <div className="col">
                        {collectionContent.map((collection, index)=>(
                            <div key={index} className='collection__single'>
                                <img src={collection.img} alt="" />
                                <div className="text-content">
                                    <h2>{collection.title}</h2>
                                    <p>{collection.des}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Collection