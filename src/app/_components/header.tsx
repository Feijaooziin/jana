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

      <SheetContent className="w-52">
        <SheetHeader className="mb-8">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <SheetClose className="flex flex-col gap-5 items-center justify-center w-full">
          <Link href="/">
            <Badge className="h-12 w-32 items-center flex justify-center">
                INÍCIO
            </Badge>
          </Link>

          <Link href="./pages/teste">
            <Badge className="h-12 w-32 items-center flex justify-center">
                CARTAS & POEMAS
            </Badge>
          </Link>

          <Link href="./pages/teste">
            <Badge className="h-12 w-32 items-center flex justify-center">
                FOTOS
            </Badge>
          </Link>

          <Link href="./pages/teste">
            <Badge className="h-12 w-32 items-center flex justify-center">
                FILMES FAVORITOS
            </Badge>
          </Link>

          <Link href="./pages/teste">
            <Badge className="h-12 w-32 items-center flex justify-center">
                JOGOS
            </Badge>
          </Link>

          <Link href="./pages/teste">
            <Badge className="h-12 w-32 items-center flex justify-center">
                SOBRE
            </Badge>
          </Link>
        </SheetClose>

      </SheetContent>
    </Sheet>

   </div>
 );
}