import React from "react";
import Image from "next/image";
import { AppStyle_ } from "@/app/Style";
const steps = [
  {
    status: "success",
    content: "<strong>Привяжи</strong> к профилю аккаунт ВКонтакте.",
  },
  {
    status: "error",
    content: "<strong>Вступи</strong> в нашу группу ВКонтакте.",
  },
  {
    status: "error",
    content: "<strong>Напиши сообщение</strong> нашему сообществу.",
  },
  {
    status: "error",
    content: '<strong>Сделай</strong> <a href="javascript:;">репост записи на свою страницу.</a>',
  },
  {
    status: "info",
    content: "Ваша страница ВКонтакте должна быть публичной, иначе мы не сможем проверить наличие репоста.",
  },
  {
    status: "info",
    content: "При удалении поста ранее, чем через 2 недели после репоста сумма бонуса будет вычтена с баланса.",
  },
];
function Bonuses() {
  return (
    <div dir="ltr" className="flex w-full dark:text-slate-100">
      <div
        className={"w-full bg-opacity-50"}
        style={{
          background: `url(/assets/images/repost.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className={`flex w-full dark:bg-slate-800 dark:bg-opacity-70 p-6`}>
          <div className="flex flex-col p-4 gap-4  ">
            <div>
              <h2 className="font-bold">dorba dorba yovba blat sdfasdf</h2>
              <p className="flex gap-1">
                <span className="text-yellow-400 font-bold"> 60.00 p</span> <span className="font-bold">sdasdasdasd sdsdd</span>
              </p>
            </div>
            <div className="flex flex-col gap-2  ">
              {steps.map((row) => (
                <p className="flex gap-2">
                  <Image width={20} height={20} alt="" src={`/assets/images/${row.status}.svg`} /> <span>{row.content}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
        <Image alt="" src={"/assets/images/wheel.png"} />
      </div>
    </div>
  );
}

export default Bonuses;
