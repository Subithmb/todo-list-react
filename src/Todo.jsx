        import {useState,useRef}from 'react'
        import './Todo.css';

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; 
        const currentDay = currentDate.getDate();

        function App() {
        const inputRef=useRef(null)
        const person={name:'Subith'}
        const [todos,setTodos]=useState([]);
      
        const onclick=()=>{
           
            if (inputRef.current.value !=='' &&inputRef.current.value !==' ') {
                setTodos([...todos,{id:Date.now(), text: inputRef.current.value,status:false}])
                  inputRef.current.value='';
                
              }else{
                alert('Input value is empty')
               
                inputRef.current.focus()
                  
              } }


    return (

    <div className="app">
        <div class='post-it' contenteditable>
        <div className="mainHeading">
            <h1 >ToDo List</h1>
        </div>
        <div className="subHeading">
            <br />
        
            <h2 className='name'>Hello {person.name}  </h2>
            <h4 className='name'>it's {currentDay}-{currentMonth}-{currentYear}</h4>
        </div>

{/* .............................input todo.............................. */}

        <div className="input">
            <input style={{width:'250px',height:'40px' }} className='inputfield'  ref={inputRef}  type="text" placeholder="🖊️ Add item..."  />
            <i onClick={onclick} className="fas fa-plus"></i>
        </div>
            
        </div>

        <div className="todos">
            {todos.map ((obj)=>{
                return (
                    
                    
            <div className="todo">
                
{/* ....................check Box................................. */}

                <div className="left">
                    { !obj.status && <input style={{backgroundColor:'white'}} onChange={(e)=>{
                        
                        setTodos(todos.filter(obj2=>{
                        if(obj2.id===obj.id){
                            obj2.status=e.target.checked
                        }
                        return obj2
                        }))

                    }}
                    value={obj.status} type="checkbox" name="" id="" />}

                    <p style={{color:'black',fontSize:'20px'}} className={obj.status ? 'textCutting':'class'}>{obj.text}</p>

                </div>

{/* ......................deleting todo .....................................*/}
                <div className='second'>
                   
                  <i id={obj.id} className="fas fa-times" onClick={(e)=>{
                    let index= todos.findIndex(obj=>{return obj.id ===parseInt(e.target.id) })
                    if (index !== -1) {
                        todos.splice(index, 1);
                        setTodos([...todos]);
                    } }}></i>
            
                </div>
            </div> 
            ) } ) }
        
        </div>
    </div>
        );
        }
        export default App;



