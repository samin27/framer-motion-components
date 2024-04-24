
import './App.css'
import DragControls from './framer-components/DragControls'
import DragRef from './framer-components/DragRef'
import DraggableDiv from './framer-components/DraggableDiv'
import ExitAndEnterAnimation from './framer-components/ExitAndEnterAnimation'
import GestureButton from './framer-components/GestureButton'
import KeyFrames from './framer-components/KeyFrames'
import ProgressBar from './framer-components/ProgressBar'

function App() {


  return (
    <>
    <div className='p-10 flex flex-col'>
      <h1 className='text-center text-4xl font-semibold'>
        Framer motion components
      </h1>
      {/* <ProgressBar/>
      <ExitAndEnterAnimation/> */}
      {/* <KeyFrames/> */}
      {/* <GestureButton/> */}
      {/* <DraggableDiv/> */}
      {/* <DragRef/> */}
      <DragControls/>
    </div>
    </>
  )
}

export default App
