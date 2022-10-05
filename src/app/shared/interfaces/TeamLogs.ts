export default interface TeamLogs {
  id: string,
  teamDetails: {
    _id: string,
    name: string,
    code: string,
    createdDate: string,
  },
  createdDate: string,
}
