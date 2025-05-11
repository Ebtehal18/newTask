// import React from "react";

import { Col, ProgressBar } from "react-bootstrap";
import { FaBed } from "react-icons/fa";

// 
interface CareStats {
  total: number;
  vacant: number;
  rate: number;
  color: string;
}

interface CareType extends CareStats {
  title: string;
  has_mappings: boolean;
}

interface StatusCodes {
  vacant: string[];
  occupied: string[];
}

interface Hospital {
  id: number;
  name: string;
  total: number;
  occupied: number;
  vacant: number;
  rate: number;
  color: string;
  careTypes: CareType[];
  status_codes: StatusCodes;
}

interface Card {
  grand_total: CareStats & { occupied: number };
  care_type_totals: {
    [key: string]: CareStats; // e.g. "IntensiveCare", "Pediatric Care"
  };
  hospitals: Hospital[];
}

const card:Card = {
  "grand_total": {
    "total": 2198,
    "occupied": 1385,
    "vacant": 813,
    "rate": 63.0,
    "color": "#9530206a"
  },
  "care_type_totals": {
    "IntensiveCare": {
      "total": 223,
      "vacant": 63,
      "rate": 71.7,
      "color": "#eb442c"
    },
    "PediatricCare": {
      "total": 144,
      "vacant": 49,
      "rate": 66.0,
      "color": "#eb442c"
    },
    "NormalCare": {
      "total": 1138,
      "vacant": 458,
      "rate": 59.8,
      "color": "#f8b324"
    }
  },
  "hospitals": [
    {
      "id": 1,
      "name": "NSH",
      "total": 446,
      "occupied": 268,
      "vacant": 178,
      "rate": 60.1,
      "color": "#eb442c",
      "careTypes": [
        {
          "title": "Intensive Care",
          "total": 63,
          "vacant": 18,
          "rate": 71.4,
          "color": "#eb442c",
          "has_mappings": true
        },
        {
          "title": "Pediatric Care",
          "total": 2,
          "vacant": 1,
          "rate": 50.0,
          "color": "#f8b324",
          "has_mappings": true
        },
        {
          "title": "Normal Care",
          "total": 339,
          "vacant": 132,
          "rate": 61.1,
          "color": "#eb442c",
          "has_mappings": true
        }
      ],
      "status_codes": {
        "vacant": ["1"],
        "occupied": ["5", "2"]
      }
    }
  ]
};


export default function Card() {
  return <>
<div className="d-flex mt-3 w-100 gap-2">
      <div style={{ backgroundColor: card.hospitals[0].color, color: 'white' }} className="py-2 rounded-2 px-3 d-flex justify-content-center align-items-center">
        <span style={{ display: 'inline-block', transform: 'rotate(270deg)', whiteSpace: 'nowrap' }}>
          {card.hospitals[0].name}
        </span>
      </div>

   
<div className="d-flex w-100 gap-2 flex-md-row  flex-column ">
   <div className="d-flex flex-fill flex-column gap-2" style={{ minWidth: 0 }}>
        <div className="w-100 h-100 p-2 rounded-2" style={{backgroundColor:card.grand_total.color}}>
            <div className="d-flex justify-content-between"> <p className="text-white mb-0">Occupancy Rate</p>
            <span className="text-white">{card.grand_total.rate} %</span>
</div>
          <ProgressBar
            now={card.grand_total.rate}
            style={{ height: '20px', backgroundColor: '#f0f0f0', minWidth: '100px' }}
            variant="danger"
          />
        </div>
<div className="d-flex gap-2 w-100">
  {["Total", "Vacant", "Occupied"].map((label, idx) => (
    <div
      key={idx}
      className="p-2 flex-grow-1 d-flex justify-content-between gap-2 align-items-center rounded-2"
      style={{ backgroundColor: card.hospitals[0].color, color: 'white' }}
    >
      <div className="bg-white p-1 rounded-2 text-black">
        <FaBed />
      </div>
      <div className="mb-0 d-flex flex-column">
        <p className="mb-0">{label}</p>
        <span>{card.grand_total.total}</span>
      </div>
    </div>
  ))}
</div>


      </div>
       <div className="d-flex flex-fill flex-column gap-2" style={{ minWidth: 0 }}>
       <div className="w-100 p-2 rounded-2 flex-fill" style={{backgroundColor:'#aaa013a0'}}>
            <div className="d-flex justify-content-between"> <p className="text-white mb-0">Icu</p>
            <span className="text-white">{card.care_type_totals.IntensiveCare.rate} %</span>

</div>
<ProgressBar
            now={card?.care_type_totals.IntensiveCare.rate}
            style={{ height: '10px', backgroundColor: '#f0f0f0', minWidth: '100px' }}
            variant="warning"
          />
</div>
       <div className="w-100 p-2 rounded-2 flex-fill" style={{backgroundColor:'#df341a9f'}}>
            <div className="d-flex justify-content-between"> <p className="text-white mb-0">Ccu</p>
            <span className="text-white">{card.care_type_totals.PediatricCare.rate} %</span>

</div>
<ProgressBar
            now={card?.care_type_totals.PediatricCare.rate}
            style={{ height: '10px', backgroundColor: '#f0f0f0', minWidth: '100px' }}
            variant="danger"
          />
</div>
       <div className="w-100 p-2 rounded-2 flex-fill" style={{backgroundColor:'#13aa279f'}}>
            <div className="d-flex justify-content-between"> <p className="text-white mb-0">NugiCu</p>
            <span className="text-white">{card.care_type_totals.NormalCare.rate} %</span>

</div>
<ProgressBar
            now={card.care_type_totals.NormalCare.rate}
            style={{ height: '10px', backgroundColor: '#f0f0f0', minWidth: '100px' }}
            variant="success"
          />
</div>
          
        </div>
</div>
<div className="d-flex flex-md-row flex-column gap-2 w-100 ">
  <div className="bg-black d-flex flex-column p-2 rounded-2">
<div className="d-flex gap-2 align-items-center flex-fill">  
   <div className="bg-white p-1 rounded-2 text-black">
     <FaBed/>

    </div> 
        <div className="d-flex flex-column text-white align-items-center ">
      <p className="mb-0">Total </p>
<span>{card.care_type_totals.IntensiveCare.total}</span>
    </div>
    </div>
<div className="d-flex gap-2 align-items-center flex-fill">  
   <div className="bg-white p-1 rounded-2 text-black">
     <FaBed/>

    </div> 
        <div className="d-flex flex-column text-white align-items-center ">
      <p className="mb-0">Total </p>
<span>{card.care_type_totals.PediatricCare.total}</span>
    </div>
    </div>
<div className="d-flex gap-2 align-items-center flex-fill">  
   <div className="bg-white p-1 rounded-2 text-black">
     <FaBed/>

    </div> 
        <div className="d-flex flex-column text-white align-items-center ">
      <p className="mb-0">Total </p>
<span>{card.care_type_totals.NormalCare.total}</span>
    </div>
    </div>
    
  </div>
  <div className=" d-flex gap-2 flex-column rounded-2">
<div className="d-flex gap-2 align-items-center rounded-2 p-1" style={{backgroundColor:"#e2d34a"}}>  
   <div className="bg-warning p-1 rounded-2 text-black">
     <FaBed/>

    </div> 
        <div className="d-flex flex-column text-white align-items-center ">
      <p className="mb-0">Vacent </p>
<span>{card.care_type_totals.IntensiveCare.vacant}</span>
    </div>
    </div>
<div className="d-flex gap-2 align-items-center rounded-2 p-1 " style={{backgroundColor:"#e26b4a"}}>  
   <div className="bg-white p-1 rounded-2 text-black">
     <FaBed/>

    </div> 
        <div className="d-flex flex-column text-white align-items-center ">
      <p className="mb-0">Total </p>
<span>{card.care_type_totals.PediatricCare.total}</span>
    </div>
    </div>
<div className="d-flex gap-2 align-items-center rounded-2 p-1" style={{backgroundColor:"#7dd734"}} >  
   <div className="bg-white p-1 rounded-2 text-black">
     <FaBed/>

    </div> 
        <div className="d-flex flex-column text-white align-items-center ">
      <p className="mb-0">Total </p>
<span>{card.care_type_totals.NormalCare.total}</span>
    </div>
    </div>
    
  </div>
</div>
     </div>



  
      
   
  </>;
}
