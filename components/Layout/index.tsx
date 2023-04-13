import {
  AutoComplete,
  Button,
  Dropdown,
  Input,
  Layout,
  Menu,
  MenuProps,
  Space,
  theme,
} from "antd";
import React, { ReactNode, useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusCircleOutlined,
  UserAddOutlined,
  DownOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import * as colors from "../../variables/themes";
import Link from "next/link";

export default function PmsLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const { Header, Sider, Content } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      key: "1",
      label: "Change Password",
      disabled: false,
    },
    {
      key: "2",
      danger: true,
      label: "Log Out",
    },
  ];

  const addCategoryItems = [
    {
      key: "1",
      label: (
        <Link prefetch={false} href={"/client-account-setup"}>
          Add Individual Client
        </Link>
      ),
      disabled: false,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 10.98C9.69282 10.98 7.82249 9.10967 7.82249 6.8025C7.82249 4.49533 9.69282 2.625 12 2.625C14.3072 2.625 16.1775 4.49533 16.1775 6.8025C16.1775 9.10967 14.3072 10.98 12 10.98Z"
            stroke="#FFCE00"
            stroke-width="1.125"
          />
          <path
            d="M3.54374 21.3187C3.54374 19.076 4.43466 16.9251 6.02051 15.3393C7.60637 13.7534 9.75725 12.8625 12 12.8625C14.2427 12.8625 16.3936 13.7534 17.9795 15.3393C19.5653 16.9251 20.4562 19.076 20.4562 21.3187H3.54374Z"
            stroke="#FFCE00"
            stroke-width="1.125"
          />
        </svg>
      ),
    },
    {
      key: "2",
      label: (
        <Link prefetch={false} href={"/new-institution-account-setup"}>
          Add Institutional Client
        </Link>
      ),
      disabled: false,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_917_2853)">
            <path
              d="M10.5228 1.06162C10.1929 0.899761 9.8073 0.899761 9.48088 1.05978L1.30799 5.15728H18.692L10.5228 1.06162ZM17.4021 6H15.7979C15.7993 6.01355 15.8 6.02726 15.8 6.04113V17.2H17.4V6.04113C17.4 6.02726 17.4007 6.01353 17.4021 6ZM18.3979 6C18.3993 6.01355 18.4 6.02726 18.4 6.04113V17.2H19.3023C19.6876 17.2 20 17.5135 20 17.9V19.3C20 19.6865 19.6876 20 19.3023 20H0.697676C0.312422 20 0 19.6865 0 19.3V17.9C0 17.5135 0.312422 17.2 0.697676 17.2H1.6V6.04113C1.6 6.02726 1.60072 6.01353 1.60215 6H0.758242C-0.0441016 6 -0.294961 4.90828 0.42457 4.55294L9.08057 0.213257C9.66107 -0.071391 10.3392 -0.071391 10.9231 0.215093L19.5732 4.55189C20.2953 4.90603 20.0452 6.00001 19.2419 6.00001L18.3979 6ZM10.5979 6C10.5993 6.01355 10.6 6.02726 10.6 6.04113V17.2H12.2V6.04113C12.2 6.02726 12.2007 6.01353 12.2021 6H10.5979ZM9.60215 6H7.93119C7.93262 6.01355 7.93334 6.02726 7.93334 6.04113V17.2H9.6V6.04113C9.6 6.02726 9.60072 6.01353 9.60215 6ZM13.1979 6C13.1993 6.01355 13.2 6.02726 13.2 6.04113V17.2H14.8V6.04113C14.8 6.02726 14.8007 6.01353 14.8021 6H13.1979ZM5.26451 6C5.26594 6.01355 5.26666 6.02726 5.26666 6.04113V17.2H6.93332V6.04113C6.93332 6.02726 6.93404 6.01353 6.93547 6H5.26451ZM4.26881 6H2.59785C2.59928 6.01355 2.6 6.02726 2.6 6.04113V17.2H4.26666V6.04113C4.26666 6.02726 4.26738 6.01353 4.26881 6ZM10 4.4C10.6627 4.4 11.2 3.86273 11.2 3.2C11.2 2.53726 10.6627 2 10 2C9.33727 2 8.8 2.53726 8.8 3.2C8.8 3.86273 9.33727 4.4 10 4.4ZM10 3.6C9.77908 3.6 9.6 3.42091 9.6 3.2C9.6 2.97908 9.77908 2.8 10 2.8C10.2209 2.8 10.4 2.97908 10.4 3.2C10.4 3.42091 10.2209 3.6 10 3.6ZM19.0698 19.0667V18.1333H0.930234V19.0667H19.0698Z"
              fill="#FFCE00"
            />
          </g>
          <defs>
            <clipPath id="clip0_917_2853">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];
  const addTransactionItems = [
    {
      key: "1",
      label: (
        <div className="px-4 text-xs font-medium">
          <label className="text-white text-sm">Add Transaction</label>
          <div className="flex flex-col mt-4">
            <Link prefetch={false} href={"/bulk-transaction-purchase"}>
              <article className="border-b border-white/10 flex min-w-[18rem] items-center justify-between group py-2">
                <h3 className="text-mintGreen">BUY</h3>
                <div className="flex gap-2 items-center">
                  <svg
                    className="fill-white group-hover:fill-blue-400 transition-all duration-300"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_921_866)">
                      <path d="M6.99992 0.583344C5.73082 0.583344 4.49023 0.959674 3.43501 1.66475C2.3798 2.36982 1.55736 3.37197 1.07169 4.54446C0.586032 5.71695 0.458961 7.00713 0.706549 8.25184C0.954138 9.49655 1.56527 10.6399 2.46265 11.5373C3.36004 12.4347 4.50338 13.0458 5.74809 13.2934C6.9928 13.541 8.28298 13.4139 9.45547 12.9282C10.628 12.4426 11.6301 11.6201 12.3352 10.5649C13.0403 9.5097 13.4166 8.26911 13.4166 7.00001C13.4146 5.29882 12.7379 3.66788 11.535 2.46496C10.332 1.26203 8.70111 0.58535 6.99992 0.583344ZM6.99992 12.25C5.96157 12.25 4.94654 11.9421 4.08318 11.3652C3.21982 10.7883 2.54691 9.96841 2.14955 9.0091C1.75219 8.04979 1.64823 6.99419 1.8508 5.97579C2.05337 4.95739 2.55338 4.02192 3.28761 3.2877C4.02184 2.55347 4.9573 2.05346 5.9757 1.85089C6.9941 1.64831 8.0497 1.75228 9.00901 2.14964C9.96832 2.547 10.7883 3.21991 11.3651 4.08327C11.942 4.94662 12.2499 5.96166 12.2499 7.00001C12.2484 8.39192 11.6948 9.72638 10.7105 10.7106C9.7263 11.6948 8.39183 12.2485 6.99992 12.25ZM9.91659 7.00001C9.91659 7.15472 9.85513 7.30309 9.74573 7.41249C9.63634 7.52188 9.48796 7.58334 9.33325 7.58334H7.58325V9.33334C7.58325 9.48805 7.5218 9.63643 7.4124 9.74582C7.303 9.85522 7.15463 9.91668 6.99992 9.91668C6.84521 9.91668 6.69684 9.85522 6.58744 9.74582C6.47805 9.63643 6.41659 9.48805 6.41659 9.33334V7.58334H4.66659C4.51188 7.58334 4.36351 7.52188 4.25411 7.41249C4.14471 7.30309 4.08325 7.15472 4.08325 7.00001C4.08325 6.8453 4.14471 6.69693 4.25411 6.58753C4.36351 6.47814 4.51188 6.41668 4.66659 6.41668H6.41659V4.66668C6.41659 4.51197 6.47805 4.36359 6.58744 4.2542C6.69684 4.1448 6.84521 4.08334 6.99992 4.08334C7.15463 4.08334 7.303 4.1448 7.4124 4.2542C7.5218 4.36359 7.58325 4.51197 7.58325 4.66668V6.41668H9.33325C9.48796 6.41668 9.63634 6.47814 9.74573 6.58753C9.85513 6.69693 9.91659 6.8453 9.91659 7.00001Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_921_866">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  BULK ENTRY
                </div>
              </article>
            </Link>
            <Link prefetch={false} href={"/bulk-sales-transaction"}>
              <article className="border-b border-white/10 flex min-w-[18rem] items-center justify-between group py-2">
                <h3 className="text-mintGreen">SELL</h3>
                <div className="flex gap-2 items-center">
                  <svg
                    className="fill-white group-hover:fill-blue-400 transition-all duration-300"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_921_866)">
                      <path d="M6.99992 0.583344C5.73082 0.583344 4.49023 0.959674 3.43501 1.66475C2.3798 2.36982 1.55736 3.37197 1.07169 4.54446C0.586032 5.71695 0.458961 7.00713 0.706549 8.25184C0.954138 9.49655 1.56527 10.6399 2.46265 11.5373C3.36004 12.4347 4.50338 13.0458 5.74809 13.2934C6.9928 13.541 8.28298 13.4139 9.45547 12.9282C10.628 12.4426 11.6301 11.6201 12.3352 10.5649C13.0403 9.5097 13.4166 8.26911 13.4166 7.00001C13.4146 5.29882 12.7379 3.66788 11.535 2.46496C10.332 1.26203 8.70111 0.58535 6.99992 0.583344ZM6.99992 12.25C5.96157 12.25 4.94654 11.9421 4.08318 11.3652C3.21982 10.7883 2.54691 9.96841 2.14955 9.0091C1.75219 8.04979 1.64823 6.99419 1.8508 5.97579C2.05337 4.95739 2.55338 4.02192 3.28761 3.2877C4.02184 2.55347 4.9573 2.05346 5.9757 1.85089C6.9941 1.64831 8.0497 1.75228 9.00901 2.14964C9.96832 2.547 10.7883 3.21991 11.3651 4.08327C11.942 4.94662 12.2499 5.96166 12.2499 7.00001C12.2484 8.39192 11.6948 9.72638 10.7105 10.7106C9.7263 11.6948 8.39183 12.2485 6.99992 12.25ZM9.91659 7.00001C9.91659 7.15472 9.85513 7.30309 9.74573 7.41249C9.63634 7.52188 9.48796 7.58334 9.33325 7.58334H7.58325V9.33334C7.58325 9.48805 7.5218 9.63643 7.4124 9.74582C7.303 9.85522 7.15463 9.91668 6.99992 9.91668C6.84521 9.91668 6.69684 9.85522 6.58744 9.74582C6.47805 9.63643 6.41659 9.48805 6.41659 9.33334V7.58334H4.66659C4.51188 7.58334 4.36351 7.52188 4.25411 7.41249C4.14471 7.30309 4.08325 7.15472 4.08325 7.00001C4.08325 6.8453 4.14471 6.69693 4.25411 6.58753C4.36351 6.47814 4.51188 6.41668 4.66659 6.41668H6.41659V4.66668C6.41659 4.51197 6.47805 4.36359 6.58744 4.2542C6.69684 4.1448 6.84521 4.08334 6.99992 4.08334C7.15463 4.08334 7.303 4.1448 7.4124 4.2542C7.5218 4.36359 7.58325 4.51197 7.58325 4.66668V6.41668H9.33325C9.48796 6.41668 9.63634 6.47814 9.74573 6.58753C9.85513 6.69693 9.91659 6.8453 9.91659 7.00001Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_921_866">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  BULK ENTRY
                </div>
              </article>
            </Link>
            <Link prefetch={false} href={"/batch-ipo-apply"}>
              <article className="border-b border-white/10 flex min-w-[18rem] items-center justify-between group py-2">
                <h3 className="text-mintGreen">IPO</h3>
                <div className="flex gap-2 items-center">
                  <svg
                    className="fill-white group-hover:fill-blue-400 transition-all duration-300"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_921_866)">
                      <path d="M6.99992 0.583344C5.73082 0.583344 4.49023 0.959674 3.43501 1.66475C2.3798 2.36982 1.55736 3.37197 1.07169 4.54446C0.586032 5.71695 0.458961 7.00713 0.706549 8.25184C0.954138 9.49655 1.56527 10.6399 2.46265 11.5373C3.36004 12.4347 4.50338 13.0458 5.74809 13.2934C6.9928 13.541 8.28298 13.4139 9.45547 12.9282C10.628 12.4426 11.6301 11.6201 12.3352 10.5649C13.0403 9.5097 13.4166 8.26911 13.4166 7.00001C13.4146 5.29882 12.7379 3.66788 11.535 2.46496C10.332 1.26203 8.70111 0.58535 6.99992 0.583344ZM6.99992 12.25C5.96157 12.25 4.94654 11.9421 4.08318 11.3652C3.21982 10.7883 2.54691 9.96841 2.14955 9.0091C1.75219 8.04979 1.64823 6.99419 1.8508 5.97579C2.05337 4.95739 2.55338 4.02192 3.28761 3.2877C4.02184 2.55347 4.9573 2.05346 5.9757 1.85089C6.9941 1.64831 8.0497 1.75228 9.00901 2.14964C9.96832 2.547 10.7883 3.21991 11.3651 4.08327C11.942 4.94662 12.2499 5.96166 12.2499 7.00001C12.2484 8.39192 11.6948 9.72638 10.7105 10.7106C9.7263 11.6948 8.39183 12.2485 6.99992 12.25ZM9.91659 7.00001C9.91659 7.15472 9.85513 7.30309 9.74573 7.41249C9.63634 7.52188 9.48796 7.58334 9.33325 7.58334H7.58325V9.33334C7.58325 9.48805 7.5218 9.63643 7.4124 9.74582C7.303 9.85522 7.15463 9.91668 6.99992 9.91668C6.84521 9.91668 6.69684 9.85522 6.58744 9.74582C6.47805 9.63643 6.41659 9.48805 6.41659 9.33334V7.58334H4.66659C4.51188 7.58334 4.36351 7.52188 4.25411 7.41249C4.14471 7.30309 4.08325 7.15472 4.08325 7.00001C4.08325 6.8453 4.14471 6.69693 4.25411 6.58753C4.36351 6.47814 4.51188 6.41668 4.66659 6.41668H6.41659V4.66668C6.41659 4.51197 6.47805 4.36359 6.58744 4.2542C6.69684 4.1448 6.84521 4.08334 6.99992 4.08334C7.15463 4.08334 7.303 4.1448 7.4124 4.2542C7.5218 4.36359 7.58325 4.51197 7.58325 4.66668V6.41668H9.33325C9.48796 6.41668 9.63634 6.47814 9.74573 6.58753C9.85513 6.69693 9.91659 6.8453 9.91659 7.00001Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_921_866">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  BULK ENTRY
                </div>
              </article>
            </Link>
            <Link prefetch={false} href={"/dividend-entry"}>
              <article className="border-b border-white/10 flex min-w-[18rem] items-center justify-between group py-2">
                <h3 className="text-mintGreen">DIVIDEND</h3>
                <div className="flex gap-2 items-center">
                  <svg
                    className="fill-white group-hover:fill-blue-400 transition-all duration-300"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_921_866)">
                      <path d="M6.99992 0.583344C5.73082 0.583344 4.49023 0.959674 3.43501 1.66475C2.3798 2.36982 1.55736 3.37197 1.07169 4.54446C0.586032 5.71695 0.458961 7.00713 0.706549 8.25184C0.954138 9.49655 1.56527 10.6399 2.46265 11.5373C3.36004 12.4347 4.50338 13.0458 5.74809 13.2934C6.9928 13.541 8.28298 13.4139 9.45547 12.9282C10.628 12.4426 11.6301 11.6201 12.3352 10.5649C13.0403 9.5097 13.4166 8.26911 13.4166 7.00001C13.4146 5.29882 12.7379 3.66788 11.535 2.46496C10.332 1.26203 8.70111 0.58535 6.99992 0.583344ZM6.99992 12.25C5.96157 12.25 4.94654 11.9421 4.08318 11.3652C3.21982 10.7883 2.54691 9.96841 2.14955 9.0091C1.75219 8.04979 1.64823 6.99419 1.8508 5.97579C2.05337 4.95739 2.55338 4.02192 3.28761 3.2877C4.02184 2.55347 4.9573 2.05346 5.9757 1.85089C6.9941 1.64831 8.0497 1.75228 9.00901 2.14964C9.96832 2.547 10.7883 3.21991 11.3651 4.08327C11.942 4.94662 12.2499 5.96166 12.2499 7.00001C12.2484 8.39192 11.6948 9.72638 10.7105 10.7106C9.7263 11.6948 8.39183 12.2485 6.99992 12.25ZM9.91659 7.00001C9.91659 7.15472 9.85513 7.30309 9.74573 7.41249C9.63634 7.52188 9.48796 7.58334 9.33325 7.58334H7.58325V9.33334C7.58325 9.48805 7.5218 9.63643 7.4124 9.74582C7.303 9.85522 7.15463 9.91668 6.99992 9.91668C6.84521 9.91668 6.69684 9.85522 6.58744 9.74582C6.47805 9.63643 6.41659 9.48805 6.41659 9.33334V7.58334H4.66659C4.51188 7.58334 4.36351 7.52188 4.25411 7.41249C4.14471 7.30309 4.08325 7.15472 4.08325 7.00001C4.08325 6.8453 4.14471 6.69693 4.25411 6.58753C4.36351 6.47814 4.51188 6.41668 4.66659 6.41668H6.41659V4.66668C6.41659 4.51197 6.47805 4.36359 6.58744 4.2542C6.69684 4.1448 6.84521 4.08334 6.99992 4.08334C7.15463 4.08334 7.303 4.1448 7.4124 4.2542C7.5218 4.36359 7.58325 4.51197 7.58325 4.66668V6.41668H9.33325C9.48796 6.41668 9.63634 6.47814 9.74573 6.58753C9.85513 6.69693 9.91659 6.8453 9.91659 7.00001Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_921_866">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  BULK ENTRY
                </div>
              </article>
            </Link>
          </div>
          <Link prefetch={false} href={"/transactions"}>
            <div className="mt-6 flex items-center gap-3 group text-goldYellow hover:text-yellow-500 transition-all duration-300 justify-end">
              <p className="">VIEW COMPLETE LIST</p>
              <svg
                className="fill-white transition-all duration-300 group-hover:fill-yellow-500"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.23145 1.42383H5.76855L10.3857 6.03809H0V8.34668H10.3857L5.76855 12.9609H9.23145L15 7.19238L9.23145 1.42383Z" />
              </svg>
            </div>
          </Link>
        </div>
      ),
    },
  ];
  function handleAdd() {}
  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: colors.sideBarColor }}
      >
        <div className="flex flex-col relative h-full">
          <div className="flex justify-center h-24 items-center min-h-[200px] text-center text-3xl font-bold text-white/90 -ml-4">
            SPI
          </div>
          <Menu
            style={{ background: colors.sideBarColor }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                label: (
                  <Link prefetch={false} href={"/"}>
                    Home
                  </Link>
                ),
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                ),
              },
            ]}
          />
        </div>
      </Sider>
      <Layout
        className="site-layout"
        style={{ maxHeight: "100vh", overflow: "hidden" }}
      >
        <Header
          style={{
            padding: "0px 32px",
            background: "#ffffff",
          }}
          className={"flex items-center justify-between"}
        >
          <div className="flex gap-16 w-full">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
                style: { fontSize: "150%" },
              }
            )}
            <div className="flex gap-4 items-center w-full text-2xl font-bold text-primaryColor/90">
              Same Person Identification (SPI) - Bisham Kunwor
            </div>
          </div>
          <div className="md:cursor-pointer hover:text-blue-600 font-medium">
            <Dropdown menu={{ items }}>
              <Space>
                admin
                <DownOutlined />
              </Space>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: "0px 0px",
            padding: 0,
            minHeight: "calc(100vh-64px)",
            overflowY: "scroll",
            overflowX: "clip",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
