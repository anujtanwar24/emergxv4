import './page.css'
import CardItem from '../cardItems'

 
 function Emergency() {
     return (
         <div className='emergency'>
            <h1> choose your emergency?</h1>
            <div className='cards__container'>
        <div className='cards__wrapper'>
         
          <ul className='cards__items'>
            <CardItem
              src='/photos/emergxv41.jpg'
              text='Chest pain or discomfort. Most heart attacks involve discomfort in the center or left side of the chest that lasts for more than a few minutes or that goes away and comes back. The discomfort can feel like uncomfortable pressure, squeezing, fullness, or pain.'
              label='HEART ATTACK'
              path='/result'
            />
            <CardItem
              src='/photos/emergxv43.jfif'
              text='Accidents are sudden, violent events that can leave a person shaken and fearful. Unless the crash is truly devastating though, many people may not realize they are injured until later.
              Injury symptoms from a car accident can take up to 24 hours or more to manifest. We covered the reason for this in a previous blog post.'
              label='ACCIDENT'
              path='/result'
            />
             <CardItem
              src='/photos/emergxv44.jfif'
              text='seizures involve a change or loss of consciousness or awareness that feels like being in a dream. You may seem awake, but you stare into space and do not respond normally to your environment or you perform repetitive movements. These may include hand rubbing, mouth movements, repeating certain words or walking in circles.'
              label='SEIZURE'
              path='/result'
            />
             </ul>
           
           <ul className='cards__items'>
             <CardItem
              src='/photos/emergxv42.jfif'
              text='Minor: First- and second-degree burns that cover less than 10% of the body are considered minor and rarely require hospitalization.Moderate: Second-degree burns that cover about 10% of the body are classified as moderate. Burns on the hands, feet, face or genitals can range from moderate to severe.Severe: Third-degree burns that cover more than 1% of the body are considered severe.'
              label='BURNS'
              path='/result'
            />
             <CardItem
              src='/photos/emergxv45.jfif'
              text='Symptoms of heat stroke include: Confusion, altered mental status, slurred speech Loss of consciousness (coma) Hot, dry skin or profuse sweating Seizures Very high body temperature Fatal if treatment delayed'
              label='HEAT STROKES'
              path='/result'
            />
             <CardItem
              src='/photos/emergxv46.jfif'
              text='people with a bone fracture will typically experience some of the following: pain, swelling, bruising, discolored skin around the affected area, protrusion of the affected area at an unusual angle, inability to put weight on the injured area, inability to move the affected area, a grating sensation in the affected bone or joint, bleeding if it is an open fracture'
              label='FRACTURES'
              path='/result'
            />
           
            </ul>
           
            <ul className='cards__items'>
            <CardItem
              src='/photos/emergxv48.jfif'
              text='Potential symptoms of an electric shock include: loss of consciousness, muscle spasms, numbness or tingling, breathing problems, headache, problems with vision or hearing, burns, seizures, irregular heartbeat '
              label='ELECTROCUTIONS'
              path='/result'
            />
             <CardItem
              src='/photos/emergxv47.jfif'
              text='Symptoms: swelling, redness or rash, pain in the affected area or in the muscles, itching, heat on and around the site of the bite or sting, numbness or tingling in the affected area.'
              label='BITES/STINGS'
              path='/result'
            />
            <CardItem
              src='/photos/emergxv49.jfif'
              text='The signs and symptoms of choking may vary according to the severity of the obstruction and the object itself: clutching at the throat, neck or throat pain, inability to speak, breathe or swallow, coughing, wheezing or other unususal breathing sounds, gagging, a change in colour (eg. blue lips or red face), chest pain, collapse'
              label='CHOCKING'
              path='/result'
            />
            
            </ul>
           
          <ul className='cards__items'>
           
                         <CardItem
              src='/photos/emergxv410.jfif'
              text='Bleeding can lead to the following symptoms: Pale, cool, clammy skin, Fast heart rate, Low blood pressure, Light-headedness, Unconsciousness, Death within seconds to minutes (in severe cases)'
              label='BLEEDDING'
              path='/result'
            />
           
           
        
            <CardItem
              src='/photos/emergxv411.jfif'
              text='Asthma signs and symptoms include: Shortness of breath, Chest tightness or pain, Wheezing when exhaling, which is a common sign of asthma in children, Trouble sleeping caused by shortness of breath, coughing or wheezing, Coughing or wheezing attacks that are worsened by a respiratory virus, such as a cold or the flu'
              label='ASTHMA'
              path='/result'
            />
            <CardItem
              src='/photos/emergxv412.jfif'
              text='General symptoms of poisoning can include: feeling and being sick, diarrhoea, stomach pain, drowsiness, dizziness or weakness, high temperature,  chills (shivering), loss of appetite, headache, irritability, difficulty swallowing (dysphagia), breathing difficulties, producing more saliva than normal, skin rash, blue lips and skin (cyanosis)'
              label='POISONING'
              path='/result'
            />
           
           
          </ul>
          <ul className='cards__items'>
              <CardItem
              src='/photos/emergxv413.jfif'
              text='Signs of an eye injury include: Pain and swelling: Your eye may hurt, especially when you try to open, close or move it. The eye may be sensitive to the touch. Swelling can affect the eyeball, eyelid or entire face, Bruising and redness: Any part of the eye may appear red or bruised, Vision changes: You may see floating black spots or flashes of light (floaters and flashes)'
              label='EYE INJURY'
              path='/result'
            />
            <CardItem
              src='/photos/emergxv414.jfif'
              text='The following symptoms may occur after a person has been unconscious: Amnesia for (not remembering) events before, during, and even after the period of unconsciousness, Confusion, Drowsiness, Headache, Inability to speak or move parts of the body (stroke symptoms), Lightheadedness, Loss of bowel or bladder control (incontinence), Rapid heartbeat (palpitations), Slow heartbeat'
              label='UNCONCIOUSNESS'
              path='/result'
            />
             <CardItem
              src='/photos/emergxv6.jpg'
              text='if your emergency is not listed above please click here'
              label='OTHERS'
              path='/result'
            />
              </ul>

        </div>
      </div>
         </div>
     )
 }
 
 export default Emergency
 