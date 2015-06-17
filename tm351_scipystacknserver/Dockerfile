FROM ipython/scipystack

MAINTAINER OU


ADD build_tm351_stack.sh /tmp/build_tm351_stack.sh
RUN bash /tmp/build_tm351_stack.sh


ADD ipynb_style /tmp/ipynb_style
ADD ipynb_custom.sh /tmp/ipynb_custom.sh
RUN bash /tmp/ipynb_custom.sh


## Extremely basic test of install
RUN python2 -c "import psycopg2, sqlalchemy"
RUN python3 -c "import psycopg2, sqlalchemy"

# Clean up from build
RUN rm -f /tmp/build_tm351_stack.sh
RUN rm -f /tmp/ipynb_custom.sh
RUN rm -f -r /tmp/ipynb_style

VOLUME /notebooks
WORKDIR /notebooks

EXPOSE 8888

ADD notebook.sh /
RUN chmod u+x /notebook.sh

CMD ["/notebook.sh"]
