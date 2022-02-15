import React, {useState} from 'react';
import TextAreaSingle from '../TextAreaSingle/TextAreaSingle';
import CounterLetter from '../CounterLetter/CounterLetter';
import Button from '../Button/Button'

export default function AddPostBlock({handleClick}){

    const [blockAddPost,setInputdata]=useState(
      {
        disableBtn:true,
        inputData:'',
      }
    )
    let inputDataLength = 0;
    if(blockAddPost.inputData!==undefined){
      inputDataLength=blockAddPost.inputData.length;
    }
    const handleChange=(e)=>{
      if((e.target.value)!==''){
        setInputdata({
          disableBtn:false,
          inputData:e.target.value,
        });
      }else{
        setInputdata({
          disableBtn:true,
          inputData:'',
        });
      }
    }

    const resetForm = (e)=>{
      setInputdata({
        disableBtn:true,
        inputData:'',
      })
    }
    
    const checkLengthPost = (e)=>{
      if(e.target.value.length>250){
        setInputdata({
          disableBtn: true,
          inputData: e.target.value,
        })
      }
    }

    return(
        <div className='post-block'>
          <form onSubmit={(e)=>{handleClick(e,blockAddPost.inputData);resetForm()}}>

            <div className='textarea-wrap'>
              <TextAreaSingle
                handleChange={(e)=>{handleChange(e);checkLengthPost(e)}} 
                placeholder='Tweet about 30 Days Of React...'
                value={blockAddPost.inputData}
              />
              <CounterLetter lengthInputData={250 - inputDataLength} />
            </div>

            <Button 
              disable={blockAddPost.disableBtn} 
              value='Add Post' 
              classname={`${blockAddPost.disableBtn ? 'btn btn-disabled btn-add-post' : 'btn btn-active btn-add-post'}`}
              type='submit'
            />
          </form>
        </div>
    );
  }