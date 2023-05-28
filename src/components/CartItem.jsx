
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5">

      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">

        <div className="w-[50%]">
          <img src={item.image} 
          className=""
          />
        </div>
        <div>
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0,20).join(" ") + "..."}</h1>
          <div className="flex justify-between items-center mt-5 gap-12">
            <p className="text-green-600 font-extrabold">${item.price}</p>
            <div
            className=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
