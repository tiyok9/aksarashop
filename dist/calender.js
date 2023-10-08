const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const prevMonthBtn = document.getElementById("prevMonth");
  const nextMonthBtn = document.getElementById("nextMonth");
  const currentMonthLabel = document.getElementById("currentMonth");
  const daysContainer = document.querySelector(".days");
  
  const dateRanges = [
        { 'tgl_mulai': '2023-08-21', 'tgl_selesai': '2023-08-30', 'stok': 5 },
        { 'tgl_mulai': '2023-08-26', 'tgl_selesai': '2023-09-05', 'stok': 2 },
        { 'tgl_mulai': '2023-08-29', 'tgl_selesai': '2023-09-02', 'stok': 1 }
    
      ];
  function isInRange(date, range) {
    const startDate = moment(range.tgl_mulai, "YYYY-MM-DD");
    const endDate = moment(range.tgl_selesai, "YYYY-MM-DD");
    return date.isBetween(startDate, endDate, null, "[]");
  }
  
  let currentDate = moment(); // Use moment.js for managing dates
  
  function renderCalendar() {
            const year = currentDate.year();
            const month = currentDate.month();
            const startOfMonth = currentDate.clone().startOf('month');
            const endOfMonth = currentDate.clone().endOf('month');
            const daysInMonth = endOfMonth.date();
            const daysToRender = [];
            currentMonthLabel.textContent = `${months[month]} ${year}`;

            const startDayOfWeek = startOfMonth.day();

            // Calculate the previous month's end date
            const prevMonthEndDate = startOfMonth.clone().subtract(1, 'day');
            const daysInPrevMonth = prevMonthEndDate.date();

            // Add days from the previous month
            for (let i = daysInPrevMonth - startDayOfWeek + 1; i <= daysInPrevMonth; i++) {
                daysToRender.push({
                    day: i,
                    isPrevMonth: true,
                });
            }

            // Add days from the current month
            for (let i = 1; i <= daysInMonth; i++) {
                daysToRender.push({
                    day: i,
                    isPrevMonth: false,
                    isNextMonth: false,
                });
            }

            const daysToAdd = 7 - (daysToRender.length % 7);

            // Add days from the next month
            for (let i = 1; i <= daysToAdd; i++) {
                daysToRender.push({
                    day: i,
                    isNextMonth: true,
                });
            }

    daysContainer.innerHTML = "";
    for (let i = 0; i < daysToRender.length; i++) {
      const dayElement = document.createElement("div");
      dayElement.classList.add("day");
      dayElement.setAttribute("data-day", daysToRender[i].day);
      dayElement.style.display = "flex";
      dayElement.style.flexDirection = "column";
      dayElement.style.alignItems = "center";
      dayElement.style.justifyContent = "center";   
      const currentDay = moment([year, month, i- 1]);
      let totalStock = 0;
      let hasStock = false; // Track if stock value is present
      

      for (let j = 0; j < dateRanges.length; j++) {
          if (isInRange(currentDay, dateRanges[j])) {
              hasStock = true;
              let overlappingStok = dateRanges[j].stok;
              for (let k = 0; k < dateRanges.length; k++) {
                  if (isInRange(currentDay, dateRanges[k]) && k !== j) {
                      overlappingStok -= dateRanges[k].stok;

                  }
              }

              totalStock = overlappingStok;
              break; // Exit the loop after calculating overlapping stock
          }
      }
      if (daysToRender[i].isPrevMonth) {
        dayElement.style.backgroundColor= "rgba(0, 0, 0, 0.09)";
      } else if (daysToRender[i].isNextMonth) {
        dayElement.style.backgroundColor= "rgba(0, 0, 0, 0.09)";
      }
      
      if (hasStock) {
          dayElement.textContent = totalStock;

          if (totalStock < 5) {
              dayElement.style.backgroundColor = "rgb(213, 24, 20)"; // Red color
          } else if (totalStock >= 5 && totalStock < 10) {
              dayElement.style.backgroundColor = "rgb(55, 112, 219)"; // Blue color
          } else {
              dayElement.style.backgroundColor = "rgb(70, 180, 84)"; // Green color
          }

          dayElement.style.color = "white";
      } 

      daysContainer.appendChild(dayElement);
    }
  
  }
  
  prevMonthBtn.addEventListener("click", () => {
    currentDate.subtract(1, "month");
    renderCalendar();
  });
  
  nextMonthBtn.addEventListener("click", () => {
    currentDate.add(1, "month");
    renderCalendar();
  });
  
  renderCalendar();
  