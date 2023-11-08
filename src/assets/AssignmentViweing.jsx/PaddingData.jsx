import { useEffect } from "react";
import { useState } from "react";
import PaddingDataCard from "./PaddingDataCard";



const PaddingData = () => {
    const [paddingDatas,setPaddingDatas] =  useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/submitted`)
        .then(res => res.json())
        .then(data => setPaddingDatas(data));
    },[])
    const hendelDelete = id =>{

        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to leave this page?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
                fetch(`http://localhost:5000/submitted/${id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then( data =>{
                console.log(data);
                if(data.deletedCount >0){
                    swal("Deleted!", "Your imaginary file has been deleted!", "success");
                    const reamming  = paddingDatas.filter( paddingData => paddingData._id !== id);
                    setPaddingDatas(reamming);

                }


                
            })
              
            }
          });

    }

    
    return (
        <div>

            {
                paddingDatas.map(paddingData =><PaddingDataCard key={paddingData._id} paddingData ={paddingData}
                hendelDelete={hendelDelete}></PaddingDataCard> )
            }
            



        </div>
    );
};

export default PaddingData;