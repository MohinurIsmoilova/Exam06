import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import img1 from '../assets/img1.jpg';


export const Header = () => {
  
  return (
    <>
    <div className="container">
        <div className='img flex justify-between mt-6'>
            <div>
        <h1>Zone</h1>
            </div>

            <div>
                <ul className='flex space-x-10'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Components</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Docs</a></li>
                </ul>
            </div>

           

               <Stack direction="row" spacing={2}>
           
               <Button variant="contained" href="#contained-buttons" color="success">
                By Now and close
                </Button>
                </Stack>
        </div>

        <div className='flex mt-20'>
            <div>
                <h1 className='text-[60px] w-[70%]'>
                    Create Your Website Today with <span className='text-orange-500'>Zone</span>
                </h1> 
                <p className='text-neutral-400 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos explicabo numquam repudiandae hic quam atque nam vitae est facere.</p>
              <div className='mt-10'>
                 <Stack direction="row" spacing={2}>
               <Button variant="contained" href="#contained-buttons" color="success">
                Figma WorkSpace
                </Button>
                </Stack>
              </div>
              <p className='text-neutral-500 mt-6'>AVAILABLEFOR</p>
            </div>

            <div className='top-10 relative'>
                <img src={img1} alt="img" />
            </div>
        </div>
    </div>
    </>
  )
}
