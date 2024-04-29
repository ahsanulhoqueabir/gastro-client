const sortClass = (data) => {
  data = data.filter((element) => element.availableseats !== 0);
  data.forEach((element) => {
    element.difference = element.totalSeats - element.availableseats;
  });
  data.sort((a, b) => b.difference - a.difference);
  data.forEach((element) => {
    delete element.difference;
  });
  return data.slice(0, 6);
};

export default sortClass;
