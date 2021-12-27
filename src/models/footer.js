import React from "react";
import NavLinkFooter from "../Components/NavBar.js/NavLinkFooter";

function Footer() {
  return (
    <div>
      <footer class="footer bg-white relative pt-1 border-b-2 border-blue-700">
        <div class="container mx-auto px-6">
          <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div class="flex flex-col">
                <span class="font-bold text-gray-700 uppercase mb-2">
                  ShopyHne
                </span>
                <span class="my-2">
                  <NavLinkFooter name="Laptops" pages="/Laptops" />
                </span>
                <span class="my-2">
                  <NavLinkFooter name="Phone" pages="/Phones" />
                </span>
                <span class="my-2">
                  <NavLinkFooter name="Accessoires" pages="/Accessoires" />
                </span>
              </div>
            </div>
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div class="flex flex-col">
                <span class="font-bold text-gray-700 uppercase mb-2">
                  ShopyHne
                </span>
                <span class="my-2">
                  <NavLinkFooter name="Contact" pages="/Contacts"  />
                </span>
                <span class="my-2">
                  <NavLinkFooter pages="#" name="Phones" />
                </span>
                <span class="my-2">
                  <NavLinkFooter pages="#" name="Accessoire" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-6">
          <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
              <p class="text-sm text-blue-700 font-bold mb-2">
                © 2021 by Med dida & Mazen ben taher
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
