"use client";

import React, { use, useEffect, useRef, useState } from "react";

type ResponseProduct = RequestProduct & { taskStatus: "סיים" | "ממתין"; status: "מאושר" | "ממתין למלאי" | "לא ניתן לספק" | null };
type RequestProduct = {
  id: string;
  storeName: string;
  productName: string;
  pic: string;
};

type StoreResponse = {
  storeName: string;
} & (
  | {
      requestStatus: "loading";
    }
  | {
      requestStatus: "inprogress";
      products: ResponseProduct[];
    }
  | {
      requestStatus: "finished";
      products: ResponseProduct[];
    }
  | {
      requestStatus: "error";
      text: string;
    }
);

const Products: RequestProduct[] = [
  { id: "123", pic: "", productName: "1קקי", storeName: "zara" },
  { id: "133", pic: "", productName: "2קקי", storeName: "zara" },
  { id: "143", pic: "", productName: "3קקי", storeName: "pipi" },
  { id: "153", pic: "", productName: "4קקי", storeName: "pipi" },
  { id: "163", pic: "", productName: "5קקי", storeName: "tuta" },
  { id: "173", pic: "", productName: "6קקי", storeName: "tuta" },
  { id: "183", pic: "", productName: "7קקי", storeName: "tuta" },
  { id: "193", pic: "", productName: "8קקי", storeName: "tuta" },
];

const wait4product = async (product: RequestProduct): Promise<ResponseProduct> => {
  const rndNumber = Math.random();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...product, status: rndNumber < 0.1 ? "לא ניתן לספק" : rndNumber < 0.8 ? "מאושר" : "ממתין למלאי", taskStatus: "סיים" });
    }, rndNumber * 5000);
  });
};

function Products_() {
  const OrderRef = useRef<HTMLDialogElement>(null);

  const [dialogName, setDialogName] = useState<"order" | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<RequestProduct[]>([]);
  const [ordersStatus, updateOrdersStatus] = useState<StoreResponse[]>([]);
  const [taskStatusList, setTaskStatusList] = useState<any[]>([]);
  const includeOrRemoveProduct = (p: RequestProduct) => {
    if (selectedProducts.length === 0) return setSelectedProducts((prev) => [...prev, p]);

    let isExist = false;
    selectedProducts.forEach((P_, i) => {
      if (P_.id === p.id) {
        isExist = true;
      }
    });
    if (isExist) {
      return setSelectedProducts((prev) => prev.filter((d) => d.id !== p.id));
    }
    return setSelectedProducts((prev) => [...prev, p]);
  };
  const sendStoreRequest = async (StoreProducts: RequestProduct[]) => {
    const CurrentStoreName = StoreProducts[0].storeName;
    setTimeout(() => {
      const newStoreState: StoreResponse = {
        storeName: StoreProducts[0].storeName,
        requestStatus: "inprogress",
        products: StoreProducts.map((p) => ({ ...p, taskStatus: "ממתין", status: null })),
      };

      updateOrdersStatus((prev) => {
        return [...prev.map((store) => (store.storeName === newStoreState.storeName ? newStoreState : store))];
      });
      newStoreState.products.forEach((product) =>
        wait4product(product).then((finProduct) => {
          updateOrdersStatus((os) => {
            return os.map((O_S) => {
              if (O_S.storeName !== CurrentStoreName) return O_S;
              if (O_S.requestStatus === "inprogress") {
                const NewProducts = O_S.products.map((p) => (p.id !== finProduct.id ? p : finProduct));
                const isFinished = !NewProducts.filter((p) => p.taskStatus !== "סיים")[0];

                return { ...O_S, requestStatus: isFinished ? "finished" : "inprogress", products: [...NewProducts] };
              }
              return O_S;
            });
          });
        })
      );
    }, 500);
  };

  const processSelectedProducts = (RequestedProducts: RequestProduct[]) => {
    const StoreNames = [...new Set(RequestedProducts.map((sp) => sp.storeName))];
    updateOrdersStatus(StoreNames.map((s) => ({ storeName: s, requestStatus: "loading" })));
    StoreNames.forEach((store) => {
      const products = RequestedProducts.filter((p) => p.storeName === store);
      sendStoreRequest(products);
    });
  };
  useEffect(() => {
    ordersStatus.map((o) => {
      if (o.requestStatus === "finished") setTaskStatusList([...taskStatusList, ...o.products.map((p) => p.status)]);
    });
  }, [ordersStatus]);
  useEffect(() => {
    if (selectedProducts.length > 1 && dialogName) {
      !OrderRef.current?.open && OrderRef.current?.showModal();
      console.log("selectedProducts larger then one");
      processSelectedProducts(selectedProducts);
      // setSelectedProducts([]);
      // setDialogName(null);
    }
    if (OrderRef.current?.open && selectedProducts.length > 0 && !dialogName) {
      OrderRef.current.close();
      setTaskStatusList([]);
    }
  }, [dialogName]);
  return (
    <div>
      <div className="flex gap-8 w-full p-2 border-2 shadow-lg">
        {" "}
        <p className="flex gap-2">
          <span>נבחרו</span>
          {selectedProducts.length}
        </p>
        {selectedProducts.length > 0 && <button onClick={() => setDialogName("order")}>בצע הזמנה</button>}
      </div>
      <div className="flex flex-wrap w-full">
        {Products.map((p) => (
          <div
            key={JSON.stringify(p)}
            onClick={() => includeOrRemoveProduct(p)}
            className={` flex flex-col ${
              selectedProducts.map((p) => p.id).includes(p.id) && "bg-green-500"
            } items-center gap-4 border-2 p-2 shadow-lg w-1/3`}
          >
            <p className="flex gap-2">
              <span>חנות</span>
              <span>{p.storeName}</span>
            </p>
            <p className="flex gap-2">
              <span>פריט</span>
              <span>{p.productName}</span>
            </p>
          </div>
        ))}
      </div>
      <dialog ref={OrderRef}>
        <button onClick={() => setDialogName(null)} className="text-5xl">
          X
        </button>
        {!ordersStatus.filter((o) => o.requestStatus !== "finished")[0] && (
          <div className="flex w-full border-2">
            {!taskStatusList.includes("ממתין למלאי") && <button className="border-2 p-2 rounded-lg bg-green-200">צא לדרך</button>}
            {taskStatusList.includes("ממתין למלאי") && (
              <div>
                {" "}
                <button className="border-2 p-2 rounded-lg bg-slate-200">המתן שכולם יהיו במלאי </button>
                <button className="border-2 p-2 rounded-lg bg-slate-200">פצל ל2 הזמנות</button>
                <button className="border-2 p-2 rounded-lg bg-slate-200">הזמן רק את הזמינים מיידית</button>
              </div>
            )}
          </div>
        )}
        {taskStatusList.includes("לא ניתן לספק") && (
          <div className="flex flex-col w-full p-2 font-bold">
            <h2>רשימת הפריטים בהזמנה שלא צפויים לחזור למלאי</h2>
            {ordersStatus.map(
              (s) =>
                s.requestStatus === "finished" &&
                s.products.map(
                  (p) =>
                    p.status === "לא ניתן לספק" && (
                      <div>
                        <p className="flex p-2 gap-3">
                          <span>חנות</span>
                          <span>{p.storeName}</span>
                        </p>
                        <p className="flex p-2 gap-3">
                          <span>פריט</span>
                          <span>{p.productName}</span>
                        </p>
                      </div>
                    )
                )
            )}
          </div>
        )}
        {taskStatusList}
        <div className="flex flex-col items-center p-2 gap-4 ">
          {ordersStatus.map((os) => (
            <div className="border-2 p-2 font-bold">{JSON.stringify(os)}</div>
          ))}
        </div>
      </dialog>
    </div>
  );
}

export default Products_;
