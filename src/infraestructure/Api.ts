import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

interface Endpoint {
  [key: string]: (...args: any[]) => Promise<any>;
}

interface Entity {
  name: string;
}

interface Data {
  [key: string]: any;
}

interface Query {
  [key: string]: any;
}

interface Config extends AxiosRequestConfig {
  headers?: AxiosRequestHeaders;
}

class Api {
  private url: string;
  private endpoints: { [key: string]: Endpoint } = {};

  constructor({ url }: { url: string }) {
    this.url = url;
  }

  createEntity(entity: Entity) {
    const name = entity.name.toLowerCase();
    this.endpoints[name] = this.createBasicCRUDEndpoints(entity);
  }

  createEntities(arrayOfEntity: Entity[]) {
    arrayOfEntity.forEach(this.createEntity.bind(this));
  }

  private createBasicCRUDEndpoints({ name }: Entity): Endpoint {
    const endpoints: Endpoint = {};

    const resourceURL = `${this.url}${name}`;

    endpoints.getAll = (query: Query = {}, config: Config = {}) => {
      return axios.get(resourceURL, { params: query, ...config });
    }

    endpoints.get = ({ id }: { id: string }, config: Config = {}) => {
      return axios.get(`${resourceURL}/${id}`, config);
    };

    endpoints.getCustom = (urlPath: string, config: Config = {}) => {
      return axios.get(`${resourceURL}/${urlPath}`, config);
    };

    endpoints.create = (toCreate: Data, config: Config = {}) => {
      return axios.post(resourceURL, toCreate, config);
    };

    endpoints.createCustom = (urlPath: string, toCreate: Data, config: Config = {}) => {
      return axios.post(`${resourceURL}/${urlPath}`, toCreate, config);
    };

    endpoints.update = ({ id }: { id: string }, toUpdate: Data, config: Config = {}) => {
      return axios.put(`${resourceURL}/${id}`, toUpdate, config);
    };

    endpoints.patch = ({ id }: { id: string }, toPatch: Data, config: Config = {}) => {
      return axios.patch(`${resourceURL}/${id}`, toPatch, config);
    };

    endpoints.delete = ({ id }: { id: string }, config: Config = {}) => {
      return axios.delete(`${resourceURL}/${id}`, config);
    };

    endpoints.deleteCustom = ({ id }: { id: string }, query: Query = {}, note: Data, config: Config = {}) => {
      return axios.delete(
        `${resourceURL}/${id}`,
        { params: query, data: note, ...config }
      );
    };

    return endpoints;
  }
}

export default Api;
