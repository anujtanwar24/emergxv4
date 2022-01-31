import CardItem from '../cardItems';



function Result() {
    return (
      <div className='emergency'>
      <h1> Result</h1>
            <div className='cards__container'>
              <div className='cards__wrapper'>
               
                <ul className='cards__items'>
                  <CardItem
                    src='/photos/emergxdoc3.png'
                    text='WITHIN 0.4 KMs'
                    t='Dr Arora'
                    
                    label='DOCTOR'
                    path='/contact'
                  />
                  <CardItem
                    src='/photos/emergxdoc3.png'
                    text='WITHIN 0.5 KMs'
                    t='Dr Verma'
                    label='DOCTOR'
                    path='/contact'
                  />
                  <CardItem
                    src='/photos/emergxdoc3.png'
                    text='WITHIN 0.9 KMs'
                    t='Dr Malhotra'
                    label='DOCTOR'
                    path='/contact'
                  />

                 
                </ul>

                <ul className='cards__items'>
                  
                  <CardItem
                    src='/photos/emergxdoc4.png'
                    text='WITHIN 1.4 KMs'
                    t='Government Hospital'
                    label='HOSPITAL'
                    path='/contact'
                  />
                  
                  <CardItem
                    src='/photos/emergxdoc3.png'
                    text='WITHIN 1.4 KMs'
                    t='Dr Kumar'
                    label='DOCTOR'
                    path='/contact'
                  />
                  <CardItem
                    src='/photos/emergxdoc4.png'
                    text='WITHIN 1.6 KMs'
                    t='city Hospital'
                    label='HOSPITAL'
                    path='/contact'
                  />
                  
                 
                </ul>
              </div>
            </div>
          </div>
        );
      
}

export default Result
