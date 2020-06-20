const square = (x) => x * x;

console.log(square(3));

const event = {
  name: "Eid Party",
  guestList: ["Faiz", "Mohammed", "Ibrahim"],
  printGuestList() {
    console.log("Guest list for " + this.name);
    this.guestList.forEach((guest) =>
      console.log(`${guest} is attending the party!`)
    );
  },
};

event.printGuestList();
