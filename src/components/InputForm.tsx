"use client";
import { addTodo } from "@/redux/todoSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";

const InputForm = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch()

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if(todo === ""){
        toast.error("add todo")
    }else{
      dispatch(addTodo({_id: Math.random().toString(), todo: todo}));
      toast.success("add success")
    }
  }
  return (
    <div className="bg-slate-500 p-4 md:p-10 lg:p-6 rounded-md mx-4">
      {/* todo form */}
      <form onSubmit={handleSubmit} className="flex relative items-center h-10 gap-3">
        
          <input
          
            onChange = {(e)=> setTodo(e.target.value)}
            value={todo}
            placeholder="Enter your todo"
            type="text"
            className="h-full   border-2 outline-none rounded-md flex-1 text-base placeholder:text-xs focus-visible:border-green-500 hover:border-green-500 duration-3000 pl-2"
          />
          {todo && <IoIosClose onClick={()=> setTodo("")} className=" absolute right-36  text-xl font-semibold hover:cursor-pointer hover:text-red-500 duration-300" /> }
        
        <button className="bg-green-600 h-full px-4 py-2 text-xs md:text-base uppercase text-white rounded-md">
          Add todo
        </button>
      </form>
      {/* todo list */}
      <div className="flex flex-col gap-4 ">
        <TodoList/>
      </div>
    </div>
  );
};

export default InputForm;
