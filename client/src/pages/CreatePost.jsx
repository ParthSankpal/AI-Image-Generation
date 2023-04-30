import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import {getRandomPrompt} from '../utils';
import { FormField, Loader } from '../components';


const CreatePost = () => {
  const navigate= useNavigate();
  const [form, setForm] = useState({
    name:"",
    prompt:"",
    photo:''
  })

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage=()=>{
    
  }

  const handleSubmit=()=>{

  }

  const handleChange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSurpriseMe=()=>{
    const randomPrompt= getRandomPrompt(form.prompt)
    setForm({...form, prompt: randomPrompt})
  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
            <p className='mt-2 text-[#666e75] text-[14px] max-w-[500px]'>Create imaginative and visually stunning images through DALL-E AI and share with community</p>
        </div>
        <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5'>
            <FormField
              labelName="Your name"
              type="text"
              name="name"
              placeholder=" john Doe"
              value={form.name}
              handleChnage={handleChange}
            />
            <FormField
              labelName="Prompt"
              type="text"
              name="prompt"
              placeholder=" an oil painting by Matisse of a humanoid robot playing chess"
              value={form.prompt}
              handleChnage={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
            <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  className='w-full h-full object-contain'
                />
              ):(
                <img 
                  src={preview}
                  alt="preview"
                  className='w-9/12 h-9/12 object-contain opacity-40'
                />
              )}
              {generatingImg && (
                <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,5)] rounded-lg'>
                  <Loader/>
                </div>
              )}
            </div>
          </div>
          <div className='mt-5 gap-5 flex'>
            <button type='button' className='text-white bg-[#4649ff] font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 w-full' onClick={generateImage}>
              {generatingImg ? "Generating...": 'Generate'}
            </button>
          </div>
          <div className='mt-10'>
            <p className='mt-2 text-[#666e75]'>
              Once you have created you can share with community
            </p>
            <button type='submit' className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
              {loading ? "sharing...":"Share with Community"}
            </button>
          </div>
        </form>
    </section>
  )
}

export default CreatePost