export abstract class Component<CONF, ELEM> {
	userConfig: CONF;
	abstract defaultConfig: CONF;
	
	protected constructor(userConfig: CONF) {
		this.userConfig = userConfig;
	}
	
	get config(): CONF {
		return {
			...this.defaultConfig,
			...this.userConfig
		};
	}
	
	abstract create(): ELEM;
}