class Config {
    public localhost:string =  "http://129.159.148.125:5000/api/"
}

class DevelopmentConfig extends Config {
    public url = `${this.localhost}code-block/`
}

class ProductionConfig extends Config {
    public url = `http://129.159.148.125:3000/api/code-block/`
}


const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
