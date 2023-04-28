import React from "react";
import AccordionItem from "./AccordionItem";
import info from "./info";
import './accordion.css'

function Accordion(){
    return(
        <section className="info">
          {info.map((item) => (
            <AccordionItem title={item.title} info={item.info} key={item.id}/>
          ))}
        </section>
      )
}

export default Accordion;