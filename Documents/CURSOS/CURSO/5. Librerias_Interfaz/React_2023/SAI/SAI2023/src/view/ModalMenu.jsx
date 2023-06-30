'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

//import '../stylesheets/modalMenu.css';

function ModalMenu() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <div className="">
      <button
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
        type="button"
        onClick={() => setShowModal(true)}>
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {showModal ? (
        <div className="fixed inset-0 z-50 flex justify-end overflow-x-hidden overflow-y-auto outline-none select-none focus:outline-none ">
          <div className="relative min-w-[260px] md:w-[380px] sm:w-[260px]">
            {/*content*/}
            <div className="flex flex-col p-4 border rounded-lg bg-lighter dark:bg-neutral-50 border-primary-50 dark:border-secondary-50">
              {/*header*/}
              <div className="flex items-center justify-between">
                <a href="#" className="">
                  <span className="sr-only">IEPAC</span>
                  <Image
                    className="w-auto cursor-pointer max-h-12 hover:opacity-50 dark:bg-white dark:rounded-lg dark:border"
                    src="https://www.iepac.mx/2019/assets/img/logo.png"
                    alt="Iepac logo"
                    width={240}
                    height={240}
                    priority
                  />
                </a>
                <button
                  className="block font-bold leading-none border rounded-lg outline-none text-primary-50 focus:outline-none hover:bg-primary-50 hover:text-white dark:hover:bg-secondary-25 dark:text-white dark:rounded-lg dark:border "
                  onClick={closeModal}>
                  <span className="block w-8 h-8 text-xl outline-none focus:outline-none">x</span>
                </button>
              </div>

              {/*body*/}
              <div className="flow-root mt-6">
                <div className="-my-6 divide-y divide-primary-50 dark:divide-secondary-50">
                  <div className="py-6 space-y-2">
                    <Link
                      href="/"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black-100 hover:bg-primary-50 bg-opacity-80 dark:hover:bg-secondary-25 dark:text-white"
                      onClick={closeModal}>
                      Home
                    </Link>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black-100 hover:bg-primary-50 bg-opacity-80 dark:hover:bg-secondary-25 dark:text-white"
                      onClick={closeModal}>
                      Servicios
                    </a>
                    <Link
                      href="/directorio"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black-100 hover:bg-primary-50 bg-opacity-80 dark:hover:bg-secondary-25 dark:text-white"
                      onClick={closeModal}>
                      Directorio
                    </Link>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black-100 hover:bg-primary-50 bg-opacity-80 dark:hover:bg-secondary-25 dark:text-white"
                      onClick={closeModal}>
                      Profile
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black-100 hover:bg-primary-50 bg-opacity-80 dark:hover:bg-secondary-25 dark:text-white"
                      onClick={closeModal}>
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default ModalMenu;
