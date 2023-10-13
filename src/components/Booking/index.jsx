import tours from "../../db/tours";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import moment from "moment";
import { PatternFormat } from "react-number-format";

const Booking = () => {
  const [submitting, setSubmitting] = useState(false);
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const [tour, setTour] = useState({
    client_name: "",
    client_phone: "",
    tour_name: tours[0].name,
    people_count: 0,
    tour_start_date: "",
    tour_end_date: "",
    tour_cost: 0,
  });

  useEffect(() => {
    const result = tours.find((item) => item.name === tour.tour_name);

    if (result && tour.tour_name) {
      const cost = result.cost * tour.people_count;
      setTour((prev) => ({ ...prev, tour_cost: cost.toLocaleString("ru") }));
    }
  }, [tour.name, tour.people_count]);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs
      .send("service_1uspunt", "template_kndqoq4", tour, "GVL0H9Lo_0Y6Nb39B")
      .then(
        (response) => {
          if (response.ok || response.text.toLowerCase() === "ok") {
            setSubmitting(false);
            alert(
              "Вы успешно забронировали тур, наш оперотаор в скором времени свяжется с Вами!",
            );
          }
        },
        (error) => {
          alert(
            "По техническим причинам тур не может быть забронирован, пожалуйста попробуйте позже.",
          );
        },
      )
      .finally(() => {
        setSubmitting(false);
        setTour({});
        window.location.reload();
      });
  };

  return (
    <section className="my-5 w-full booking p-5 px-16 rounded-2xl flex-1 shadow-2xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <form onSubmit={sendEmail} className="flex flex-col gap-1">
        <label className="flex flex-col gap-2">
          <span className="text-white font-medium">Имя:</span>
          <input
            className="border border-2 p-2 rounded-xl"
            type="text"
            placeholder="Ваше полное имя"
            required
            onChange={(event) =>
              setTour((prev) => ({ ...prev, client_name: event.target.value }))
            }
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-white font-medium">Выберите тур</span>
          <select
            required
            className="border border-2 p-3 rounded-xl"
            onChange={(event) => {
              setTour((prev) => ({
                ...prev,
                tour_name: event.target.value,
              }));
            }}
          >
            {tours?.map((tour, i) => (
              <option value={tour.name} key={`tour-${i}`}>
                {tour.name}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-white font-medium">Количество людей</span>
          <input
            className="border border-2 p-2 rounded-xl"
            type="number"
            min="1"
            max="50"
            placeholder="Сколько человек ?"
            required
            onChange={(event) =>
              setTour((prev) => ({ ...prev, people_count: event.target.value }))
            }
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-white font-medium">Дата</span>
          <div className="flex gap-3">
            <input
              className="border border-2 p-1 rounded-xl"
              type="date"
              min={`${new Date().getFullYear()}-01-01`}
              max={`2025-01-01`}
              required
              placeholder="Выберите дату"
              onChange={(event) =>
                setTour((prev) => ({
                  ...prev,
                  tour_start_date: moment(event.target.value).format(
                    "DD.MM.YYYY",
                  ),
                }))
              }
            />

            <input
              className="border border-2 p-1 rounded-xl"
              type="date"
              min={`${new Date().getFullYear()}-01-01`}
              max={`2025-01-01`}
              required
              placeholder="Выберите дату"
              onChange={(event) =>
                setTour((prev) => ({
                  ...prev,
                  tour_end_date: moment(event.target.value).format(
                    "DD.MM.YYYY",
                  ),
                }))
              }
            />
          </div>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-white font-medium">Номер телефона</span>

          <PatternFormat
            format="+## (###) ###-##-##"
            className="border border-2 p-2 rounded-xl"
            type="text"
            required
            onChange={(event) =>
              setTour((prev) => ({ ...prev, client_phone: event.target.value }))
            }
            valueIsNumericString={true}
          />
        </label>

        <input
          className="cursor-pointer self-start my-6 bg-[#FF9119] hover:bg-[#FF9119cc] p-3 px-6 rounded-lg text-white font-medium"
          type="submit"
          value={submitting ? "Идёт бронирование..." : "Забронировать"}
          disabled={submitting}
        />
      </form>
    </section>
  );
};

export default Booking;
