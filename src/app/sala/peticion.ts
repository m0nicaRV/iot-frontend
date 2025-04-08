export interface Sala {
    id?: number;
    titulo: string;
    temp: number;
    estado: "on" | "off";
    file?: {
      id?: number;
      file_path: string;
      name?: string;
    };
  }
  