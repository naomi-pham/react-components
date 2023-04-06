import { Listbox } from "@headlessui/react";
import React, { useState, useEffect, useRef } from "react";
import { IconArrow, IconCheck } from "../icons";
import invitationList from "../data/invitationList";

const Filter = () => {
  const deliveryStatus = [
    {
      id: 0,
      label: "Delivered",
    },
    {
      id: 1,
      label: "Delivering",
    },
    {
      id: 2,
      label: "Not delivered",
    },
  ];

  const invitationMethods = [
    {
      id: 0,
      label: "Manual invitation",
    },
    {
      id: 1,
      label: "Automatic invitation",
    },
  ];

  const [list, setList] = useState(invitationList);

  const tempStatus = deliveryStatus.find((status) => status.label);
  const [selectedStatus, setSelectedStatus] = useState(tempStatus);

  const tempMethod = invitationMethods.find((status) => status.label);
  const [selectedInvitationMethod, setSelectedInvitationMethod] = useState([
    invitationMethods[0],
    invitationMethods[1],
  ]);

  const handleChangeDeliveryStatus = (event) => {
    setSelectedStatus(deliveryStatus.find((status) => status.id === event.id));
  };

  useEffect(() => {
    if (selectedStatus.id === 0) {
      return setList(invitationList);
    }
    const newList = invitationList.filter((list) => {
      return list.deliveryStatus === selectedStatus.label;
    });
    setList(newList);
  }, [selectedStatus]);

  return (
    <div>
      <div className="flex gap-4">
        <Listbox
          as="div"
          value={selectedStatus.id}
          onChange={handleChangeDeliveryStatus}
          className="relative"
        >
          <Listbox.Button className="flex min-w-[300px] items-center justify-between rounded-lg border border-slate-300 px-3 py-2 text-slate-700 focus:outline-none focus:ring-1 focus:ring-rose-400">
            <Listbox.Label>Delivery Status</Listbox.Label>
            <span>{selectedStatus.label}</span>
            <span>
              <i>
                <IconArrow />
              </i>
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute top-12 w-full space-y-2 rounded-lg border border-slate-200 bg-white p-2 shadow-md">
            {deliveryStatus.map((status) => (
              <Listbox.Option key={status.id} value={status}>
                <div
                  className={`flex w-full justify-between rounded-lg px-2 py-3 text-slate-700 hover:cursor-pointer hover:bg-slate-100 ${
                    selectedStatus.id === status.id
                      ? "bg-slate-100"
                      : "bg-white"
                  }`}
                >
                  {status.label}
                  {selectedStatus.id === status.id ? (
                    <span>
                      <IconCheck />
                    </span>
                  ) : null}
                </div>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>

        <Listbox
          as="div"
          value={selectedInvitationMethod}
          onChange={() =>
            setSelectedInvitationMethod(
              invitationMethods.filter(
                (method) => method !== selectedInvitationMethod
              )
            )
          }
          className="relative"
          multiple
        >
          <Listbox.Button className="flex min-w-[300px] items-center justify-between rounded-lg border border-slate-300 px-3 py-2 text-slate-700 focus:outline-none focus:ring-1 focus:ring-rose-400">
            <span>{selectedInvitationMethod[0].label}</span>
            <span>
              <i>
                <IconArrow />
              </i>
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute top-12 w-full space-y-2 rounded-lg border border-slate-200 bg-white p-2 shadow-md">
            {invitationMethods.slice(1, 4).map((method) => (
              <Listbox.Option key={method.id} value={method}>
                <div
                  className={`flex w-full justify-between rounded-lg px-2 py-3 text-slate-700 hover:cursor-pointer hover:bg-slate-100 ${
                    selectedInvitationMethod.id === method.id
                      ? "bg-slate-100"
                      : "bg-white"
                  }`}
                >
                  {method.label}
                  {selectedInvitationMethod.id === method.id ? (
                    <span>
                      <IconCheck />
                    </span>
                  ) : null}
                </div>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>

      <div className="mt-10 space-y-4 py-6">
        {list.map((item) => (
          <div key={item.id} className="grid grid-cols-2 gap-6">
            <div className="w-fit rounded-lg bg-green-100 px-2 py-1">
              {item.deliveryStatus}
            </div>
            <div>{item.invitationMethod}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
