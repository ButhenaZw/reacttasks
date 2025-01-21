import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Child from './task14(2)';

export default function Task4() {
  const notify = () => toast('this is toast from parent!');

  return (
    <div className="grid place-items-center h-dvh bg-zinc-900/15">
        <h1>Prent Component</h1>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
      <p>child component</p>
      <Child />
      
    </div>
  );
}
