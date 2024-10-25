import { Menu } from "lucide-react";
import { Badge } from "./ui/badge";
import { Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger, 
  SheetClose } from "./ui/sheet";
import Link from "next/link";


export default function Header() {
 return (
   <div className="bg-pink-950 flex justify-between p-5">
    <h1>Jana.com</h1>
    <Sheet>

      <SheetTrigger>
        <Badge>
          <Menu size={24}/>
        </Badge>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

      <SheetClose>
        <Link href="/">
          <Badge>
              Início
          </Badge>
        </Link>
      </SheetClose>

      </SheetContent>

    </Sheet>

   </div>
 );
}