import * as React from 'react';

import img from '../../assets/img/lunch.png';
import AppContext from '../../context/context';
export interface IBody {}

export default function Body(props: IBody) {
  return (
    <div className='lg:ml-3 flex lg:mt-8 '>
      <div className=''>
        <img src={img} alt='' />
      </div>
      <div className='flex flex-col justify-end w-2/3 mr-10'>
        <div className='flex flex-row justify-end '>
          <div className='bg-fr text-white h-12 mr-10 py-3 px-4 w-44'>
            Filter by Year
          </div>
          <div className='bg-fr text-white h-12 mr-10 py-3 px-4 w-44 '>
            Sort Descending
          </div>
        </div>
        <div className='flex flex-col text-sc text-3xl mt-5 '>
          <AppContext.Consumer>
            {(context) => {
              return (
                <>
                  {Object.keys(context.lunches).map((lunch: any, index) => {
                    console.log(context.lunches[lunch].mission_name);
                    return (
                      <div
                        key={index}
                        className='mx-10  mb-7  border-solid border-sc  border-2  p-8  rounded-xl'
                      >
                        <div className='capitalize flex justify-between '>
                          <div className=''>#{index + 1}</div>
                          <div className=''>
                            {context.lunches[lunch].mission_name}
                          </div>
                          <div className=''>
                            <div className=''></div>
                            <div className=''>
                              {/*   {context.lunches[lunch].rocket} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              );
            }}
          </AppContext.Consumer>
        </div>
      </div>
    </div>
  );
}
