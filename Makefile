.phony: run
run:
	@deno run --unstable --allow-env main.ts

.phony: cache
cache:
	@deno cache --unstable *.ts*
