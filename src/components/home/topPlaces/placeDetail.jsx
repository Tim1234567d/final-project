import s from './placeDetail.module.css'
import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedTopPlace, removeSelectedToplace } from '../../../redux/actions/topPlaces';
import Form from '../../pages/tours/form/Form'



const PlaceDetail = () => {  

  const { topPlacesId } = useParams(); 
  let topPlace = useSelector((state) => state.selectedtopPlace);
  const { name, imageUrl, title, subTitle, day1,day2,day3,day4,day5,day6,day7 } = topPlace;
  const dispatch = useDispatch();  
   

  useEffect(() => {
    if (topPlacesId && topPlacesId !== "") dispatch(fetchSelectedTopPlace(topPlacesId));
    return () => {
      dispatch(removeSelectedToplace());
    };
  }, [topPlacesId]);


    return (
        <div className={s.wrapper}>
            
      <div className={s.containerrr}>
        <div className={s.main__info}> 
          <h1></h1>
          <div class={s.photo}><img   src={imageUrl} alt="nature" class="nature-photo" />
          </div>
          <h3>{name}</h3>
          <p className={s.text}> 
         {title}
            <br />
            <br />
          {subTitle}
          </p> 
          <div >
              <div className={s.accordionItem}>
                <input className={s.accordionItemImput} type="checkbox" id="accordion-1" />
                <label className={s.accordionItemTrigger} for="accordion-1">Day1: Bishkek</label>
                <div className={s.accordionItemContent}>{day1}</div>
              </div>
              <div className={s.accordionItem}>
                <input className={s.accordionItemImput} type="checkbox" id="accordion-2" />
                <label className={s.accordionItemTrigger} for="accordion-2">Day 2: Bishkek - Burana tower - ChongKemin</label>
                <div className={s.accordionItemContent}>{day2}</div>
              </div>
              <div className={s.accordionItem}> 
                <input className={s.accordionItemImput} type="checkbox" id="accordion-3" />
                <label className={s.accordionItemTrigger} for="accordion-3">Day 3: ChongKemin - Karakol.</label>
                <div className={s.accordionItemContent}>{day3}</div>
              </div>
              <div className={s.accordionItem}>
                <input className={s.accordionItemImput} type="checkbox" id="accordion-4" />
                <label className={s.accordionItemTrigger} for="accordion-4">Day 4: Karakol - AltynArashan - Karakol.</label>
                <div className={s.accordionItemContent}>{day4}</div>
              </div>
              <div className={s.accordionItem}>
                <input className={s.accordionItemImput} type="checkbox" id="accordion-5" />
                <label className={s.accordionItemTrigger} for="accordion-5">Day 5: Karakol - JetiOguz - Bokonbaevo</label>
                <div className={s.accordionItemContent}>{day5}</div>
              </div>

              <div className={s.accordionItem}>
                <input className={s.accordionItemImput} type="checkbox" id="accordion-6" />
                <label className={s.accordionItemTrigger} for="accordion-6">Day 6: Bokonbaevo - Kochkor</label>
                <div className={s.accordionItemContent}>{day6}</div>
              </div>
              <div className={s.accordionItem}>
                <input className={s.accordionItemImput} type="checkbox" id="accordion-7" />
                <label className={s.accordionItemTrigger} for="accordion-7">Day 7: Kochkor - SongKul, horse trek.</label>
                <div className={s.accordionItemContent}>{day7}</div>
              </div>
    
            </div>
        </div>

        <div class={s.sidebar}>
        <Form />

        </div>
       
      </div> 
    

        </div>
    )
}

export default PlaceDetail;