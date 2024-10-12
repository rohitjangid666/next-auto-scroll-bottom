export interface ChatType {
  _id: string;
  name: string;
  profile: string;
  message: string;
  time: string;
}

export interface MessageType {
  _id: string;
  body: string;
  date: Date;
  from: {
    profile: string;
    fullName: string;
  };
}
