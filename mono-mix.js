class MonoMix extends AudioWorkletProcessor {
	constructor(options)
	{
		// TODO: Set number of outputs
		super(options);
	}
	process (inputs, outputs) {
		let out = outputs[0][0];
		for (var sample = 0; sample < inputs[0][0].length; sample++)
		{
			for (var ch = 0; ch < inputs[0].length; ch++)
			{
				out[sample] += inputs[0][ch][sample];
			}
			out[sample] /= inputs[0].length;
		}
		
		if (inputs[0].length > 1)
		{
			// Copy left > right for stereo
			outputs[0][1].set(outputs[0][0]);
		}
		
		
		return true;
	}
};

registerProcessor('mono-mix', MonoMix);