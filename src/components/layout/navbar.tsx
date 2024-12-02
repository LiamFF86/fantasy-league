import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { mainNavItems } from '@/config/routes'

export function Navbar() {
  const location = useLocation()
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatarUrl: '',
  }

  return (
    <nav className="border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              Fantasy NFL
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] transition-transform duration-300 ease-in-out">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-4">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        location.pathname === item.path ? 'text-primary' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                      <Link to="/profile" className="text-sm font-medium hover:text-primary">Profile</Link>
                      <Link to="/settings" className="text-sm font-medium hover:text-primary">Settings</Link>
                      <Link to="/notifications" className="text-sm font-medium hover:text-primary">Notifications</Link>
                      <button className="text-sm font-medium text-left hover:text-primary">Log out</button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Combined Main Navigation and User Menu - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Main Navigation using NavigationMenu */}
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent transition-colors",
                        location.pathname === item.path && 
                          "bg-accent text-accent-foreground"
                      )}
                    >
                      <Link to={item.path}>
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="p-0">
                    <Link 
                      to="/profile" 
                      className="w-full px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-sm"
                    >
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link 
                      to="/settings" 
                      className="w-full px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-sm"
                    >
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <Link 
                      to="/notifications" 
                      className="w-full px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-sm"
                    >
                      Notifications
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-0">
                  <button 
                    className="w-full px-2 py-1.5 text-sm text-left text-destructive hover:bg-destructive/10 hover:text-destructive rounded-sm"
                  >
                    Log out
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
} 