import MessageIcon from "@mui/icons-material/Message";
import PeopleIcon from "@mui/icons-material/People";

export default function teams() {
    return (
        <div className="p-4  rounded md: lg  gap-8 space-y-4">
            <h1 className="text-5xl font-bold">Team Members</h1>

            <div className="flex items-center justify-between">
                <div className="flex gap-3">
                    <PeopleIcon />
                    <MessageIcon/>
                    <div>
                        <h2 className="text-3xl font-bold">John Smith</h2>
                        <p className="text-2xl font-bold">Manager</p>
                    </div>
                </div>
                
            </div>

            <div className="flex items-center justify-between">
                <div className="flex gap-4">
                    <PeopleIcon  />
                    <MessageIcon />
                    <div>
                        <h2 className="text-3xl font-bold">Anastasya Primo</h2>
                        <p className="text-2xl font-bold">Digital Marketing</p>
                    </div>
                </div>
            
            </div>

            <div className="flex items-center justify-between">
                <div className="flex gap-4">
                    <PeopleIcon />
                    <MessageIcon />
                    <div>
                        <h2 className="text-3xl font-bold"> Colt Heist</h2>
                        <p className="text-2xl font-bold">Digital Marketing</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}