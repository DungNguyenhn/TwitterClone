import './App.css';
import React, { useState, useEffect , useRef } from 'react'
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faRetweet} from '@fortawesome/free-solid-svg-icons'
import {faEdit, faTrashAlt, faComment, faHeart} from '@fortawesome/free-regular-svg-icons'

function TextAreaSingle({input,handleChange,placeholder,value}){
  return(
    <textarea 
      ref={input} 
      onChange={handleChange} 
      className='textarea-post' 
      placeholder={placeholder}
      value={value}
    >
    </textarea>
  );
}
function TextAreaInputPost(props){
  const {placeholder,input,handleChange,lengthInput,value}=props;
  const lengthInputData=250-lengthInput;
  return(
    <div className='textarea-wrap'>
      <TextAreaSingle
        input={input}
        handleChange={handleChange}
        placeholder={placeholder}
        value={value} 
      />
      <span className='count-number-text'>{lengthInputData}</span>
    </div>
  )
}
function Button({value,classname,disable,handleClick}){
  return(
    <div className='btn-wrap'>
      <button onClick={handleClick} className={classname} disabled={disable}>{value} </button>
    </div>
  )
}
function AddPostBlock({handleClick,input,blockAddPost,handleChangeInput}){
  // const [blockAddPost,setInputdata]=useState(
  //   {
  //     disableBtn:true,
  //     inputData:'',
  //   }
  // )
  // const handleChangeInput=(e)=>{
  //   if((e.target.value)!==''){
  //     setInputdata({
  //       disableBtn:false,
  //       inputData:e.target.value,
  //     });
  //   }else{
  //     setInputdata({
  //       disableBtn:true,
  //       inputData:'',
  //     });
  //   }
  // }
  // const setHandleClick=(e)=>{
  //   setInputdata({
  //     disableBtn:true,
  //     inputData:'',
  //   });
  // }
  let inputDataLength=0;
  if(blockAddPost.inputData!==undefined){
    inputDataLength=blockAddPost.inputData.length;
  }
  return(
      <div className='post-block'>
        <form onSubmit={handleClick}>
          <TextAreaInputPost 
            lengthInput={inputDataLength}
            handleChange={handleChangeInput} 
            input={input} 
            placeholder='Tweet about 30 Days Of React...'
            value={blockAddPost.inputData}
          />
          <Button 
            disable={blockAddPost.disableBtn} 
            value='Add Post' 
            classname={`${blockAddPost.disableBtn ? 'btn btn-disabled btn-add-post' : 'btn btn-active btn-add-post'}`}
          />
        </form>
      </div>
  );
}
function NameAndImgUser({username,tagname}){
  return(
    <div className='top-user-block'>
      <div className='img-user-wrap'>
        <div className='img-circle-wrap'>
          <FontAwesomeIcon icon={faUser}/>
        </div>
      </div>
      <div className='user-name-wrap'>
        <span>{username}</span>
        <span>{tagname}</span>
      </div>
    </div>
  );
}
function ContentPostBlock({post}){
  return(
    <div className='content-text-wrap'>
      <p className='content-text'>
        {post}
      </p>
    </div>
  );
}
function DetailPost({dayPost,handleDelete,handleEdit,index}){
  return(
    <div className='post-detail-wrap'>
      <div className='post-icon-left'>
        <FontAwesomeIcon icon={faEdit} onClick={()=>handleEdit(index)} />
        <FontAwesomeIcon icon={faTrashAlt} onClick={()=>handleDelete(index)}/>
      </div>
      <div className='post-icon-center'>
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faRetweet} />
      </div>
      <div className='date-posted'>
        {dayPost}
      </div>
    </div>
  )
}
function UserSingleBlock({username,tagname,post,dayPost,handleDelete,handleEdit,i,input}){
  const [editPost,setEditPost]=useState(false);
  const [editText,setEditText]=useState(post);
  const updatePost=()=>{
    setEditPost(true);
  }
  const cancelUpdatePost=()=>{
    setEditPost(false)
    setEditText(post)
  }
  const handleChangeInputEdit=()=>{
    setEditText(input.current.value)
  }
  const editTextRemoveBlankSpace=(editText.replace(/\s\s\s+/g,''))
  if(editPost===false)
  {
    return(
      <div>
        <NameAndImgUser username={username} tagname={tagname} />
        <ContentPostBlock post={post} />
        <DetailPost dayPost={dayPost} handleDelete={handleDelete} handleEdit={updatePost} index={i}/>
      </div>
    );
  }
  else
  {
    return(
      <form onSubmit={()=>cancelUpdatePost()}>
        <TextAreaSingle value={editTextRemoveBlankSpace} handleChange={handleChangeInputEdit} input={input}/>
        <div className='btn-edit-wrap '>
          <Button value='Save' classname='btn btn-small save-btn' handleClick={()=>handleEdit(i)}/>
          <Button value='Cancel' classname='btn btn-small cancel-btn' handleClick={cancelUpdatePost} />
        </div>
      </form>
    );
  }
}
function UserPostBlock({data,handleDelete,handleEdit,input}){
  const postList=data.map((postList,i)=>{
    const {username,tagname,post,dayPost}=postList;
    return(
      <div key={`${username} + ${i}`} className='user-post-block'>
        <UserSingleBlock 
          username={username}
          tagname={tagname}
          post={post}
          dayPost={dayPost}
          handleDelete={handleDelete}
          i={i}
          input={input}
          handleEdit={handleEdit}
        />
      </div>
    );
  })
  return(
    <div>
      {postList}
    </div>
  )
}
function App() {
  const setDayPost=()=>{
    let options = {year: 'numeric', month: 'short', day: 'numeric',hour:'2-digit',minute:'2-digit'};
    let date = new Date();
    return date.toLocaleString('en-US', options);
  }
  const [post,setPost]=useState([
    {
      username:'dunghutkhoi',
      tagname:'@dunghutkhoi',
      post:
        `30 Days Of React challenge has been started on 1 October and still ongoing. 
        It will end the 30 October 2020. It was a real challenge for everyone. 
        Students learned quite a lot of concepts. I hope this will help lots of students.`,
      dayPost:setDayPost(),
    },
    {
      username:'dunghutkhoi',
      tagname:'@dunghutkhoi',
      post:
        `30 Days Of JavaScript challenge has been started on 1 January and ended on 30 January 2020. 
         It is of the best JavaScript material on the internet. Students learned quite a lot of concepts. 
         I hope this will help lots of students. JavaScript for Ever!`,
      dayPost:setDayPost(),
    },
    {
      username:'dunghutkhoi',
      tagname:'@dunghutkhoi',
      post:
        `30 Days Of Python challenge has been started on 22 November 2019 and ended on 22 December 2020.
         It is of the best references for Pythonistas, data scientists and aspiring ML.
        Students learned quite a lot of concepts. I hope this will help lots of students. Python is for best friend`,
      dayPost:setDayPost(),
    },
    {
      username:'dunghutkhoi',
      tagname:'@dunghutkhoi',
      post:
        `30 Days Of Python challenge has been started on 22 November 2019 and ended on 22 December 2020.
         It is of the best references for Pythonistas, data scientists and aspiring ML.
        Students learned quite a lot of concepts. I hope this will help lots of students. Python is for best friend`,
      dayPost:setDayPost(),
    },
    {
      username:'dunghutkhoi',
      tagname:'@dunghutkhoi',
      post:
        `I have no idea about the coming challenge. 
         It could be 30 days of HTML & CSS, ReactNative, Data Analysis or MERN.`,
      dayPost:setDayPost(),
    }
  ]);
  const [blockAddPost,setInputdata]=useState(
    {
      disableBtn:true,
      inputData:'',
    }
  )
  const handleChangeInput=(e)=>{
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
  const input=useRef(null);
  const submitForm=(e)=>{
    console.log('Submit xong')
    e.preventDefault();
    setPost([
      ...post,
      {
        username:'Anonymous User',
        tagname:'@Anonymous',
        post:input.current.value,
        dayPost:setDayPost(),
      }
    ])
    setInputdata({
      disableBtn:true,
      inputData:'',
    });
  }
  const deletePost=(i)=>{
    let postCopy=[...post];
    postCopy.splice(i,1);
    setPost(postCopy);
  }
  const saveEdit=(i)=>{
    let copyPost=[...post]
    copyPost[i].post=input.current.value;
    setPost(copyPost);
  }
  console.log('render lai nay')
  return (
    <div className="App">
      <div className='main-wrap'>
        <AddPostBlock blockAddPost={blockAddPost} handleChangeInput={handleChangeInput} input={input} handleClick={submitForm}/>
        <UserPostBlock data={post} handleDelete={deletePost} input={input} handleEdit={saveEdit}/>
      </div>
    </div>
  );
}

export default App;
